const UserModel = require('../models/user.model');
const pool = require('../database/db');

const { getHintForTopic } = require('../utils/patternHints.utils');

const QuestionModel = require('../models/question.model');
const TestModel = require('../models/test.model');

const { calculateNewDifficulty } = require('../utils/adaptive.utils');
const { updateTopicPerformance } = require('../utils/topicAdaptive.utils');

const { getWeakTopics } =
require("../models/topicPerformance.model");


/* ======================
ALL TOPICS (MASTER LIST)
====================== */

const ALL_TOPICS = [
  "Two Pointer",
  "HashMap",
  "Prefix Sum",
  "Sliding Window",
  "Kadane",
  "Math",
  "String Manipulation",
  "Bit Manipulation",
  "Linked List"
];


/* ======================
AUTH PAGES
====================== */

exports.loginPage = (req, res) => {
  res.render('login');
};

exports.registerPage = (req, res) => {
  res.render('register');
};



/* ======================
LOGIN USER
====================== */

exports.loginUser = async (req,res)=>{

  const {username,password} = req.body;

  const user =
    await UserModel.findUserByUsername(username);

  if(!user || user.password !== password){
    return res.render("login",{error:"Invalid credentials"});
  }

  req.session.userId = user.id;

  res.redirect("/dashboard");
};



/* ======================
REGISTER USER
====================== */

exports.registerUser = async (req,res)=>{

  const {username,password} = req.body;

  const existing =
    await UserModel.findUserByUsername(username);

  if(existing){
    return res.render("register",{error:"User already exists"});
  }

  await UserModel.createUser(username,password);

  res.redirect("/");
};



/* ======================
BUILD TOPIC OBJECT (FIX CORE BUG)
====================== */

const buildTopicPerformance = (rows) => {

  const topicPerformance = {};

  // initialize ALL topics
  ALL_TOPICS.forEach(topic => {
    topicPerformance[topic] = {
      correct: 0,
      total: 0
    };
  });

  // override with DB values
  rows.forEach(row => {
    topicPerformance[row.topic] = {
      correct: row.correct,
      total: row.total
    };
  });

  return topicPerformance;
};



/* ======================
DASHBOARD
====================== */

exports.dashboardPage = async (req, res) => {

  const userId = req.session.userId;

  if (!userId) {
    return res.redirect('/');
  }

  const user = await UserModel.findUserById(userId);

  const result = await pool.query(
    "SELECT topic, correct, total FROM topic_performance WHERE user_id=$1",
    [userId]
  );

  user.topicPerformance = buildTopicPerformance(result.rows);

  res.render("dashboard", { user });

};



/* ======================
TEST PAGE
====================== */

exports.testPage = async (req, res) => {

  const testId = req.params.id;

  const test = TestModel.findTestById(testId);

  if (!test) {
    return res.redirect("/dashboard");
  }

  const user = await UserModel.findUserById(test.userId);

  res.render("test", {
    test,
    user   // 🔥 FIX
  });

};



/* ======================
RESULT PAGE
====================== */

exports.resultPage = async (req,res)=>{

  const testId = req.params.id;

  const test = TestModel.findTestById(testId);

  const user = await UserModel.findUserById(test.userId);

  const result = await pool.query(
    "SELECT topic, correct, total FROM topic_performance WHERE user_id=$1",
    [user.id]
  );

  user.topicPerformance = buildTopicPerformance(result.rows);

  const weakTopics = [];

  Object.keys(user.topicPerformance).forEach(topic => {

    const data = user.topicPerformance[topic];

    const accuracy =
      data.total === 0 ? 0 : data.correct / data.total;

    // FIXED LOGIC
   if(data.total > 0 && accuracy < 0.5){
      weakTopics.push(topic);
    }

  });

  const hints = weakTopics.map(topic => ({
    topic,
    hint: getHintForTopic(topic)
  }));

  res.render("result",{
    test,
    user,
    hints
  });

};



/* ======================
LOGOUT
====================== */

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};



/* ======================
START TEST
====================== */

exports.startTest = async (req,res)=>{

  const userId = req.session.userId;

  if(!userId){
    return res.redirect("/");
  }

  const user = await UserModel.findUserById(userId);

  const difficulty =
    user.current_difficulty || user.currentDifficulty;

  const questions =
    QuestionModel.getQuestionsByDifficulty(difficulty);

  const weakTopics =
    await getWeakTopics(userId);

  let prioritized =
    questions.filter(q => weakTopics.includes(q.topic));

  let others =
    questions.filter(q => !weakTopics.includes(q.topic));

const shuffle = (arr) => {
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

  prioritized = shuffle(prioritized);
  others = shuffle(others);

let selectedQuestions = [];

if(prioritized.length >= 2){
  selectedQuestions = [
    prioritized[0],
    prioritized[1],
    others[0]
  ];
} else {
  selectedQuestions = shuffle(questions).slice(0,3);
}

  if(selectedQuestions.length < 3){

    const remaining = questions.filter(
      q => !selectedQuestions.includes(q)
    );

    selectedQuestions = [
      ...selectedQuestions,
      ...remaining.slice(0,3-selectedQuestions.length)
    ];

  }

  const test =
    TestModel.createTest(
      user.id,
      selectedQuestions,
      difficulty
    );

  res.redirect(`/test/${test.id}`);

};



/* ======================
SUBMIT TEST
====================== */

exports.submitTest = async (req,res)=>{

  const { testId } = req.body;

  const test = TestModel.findTestById(testId);

  if(!test){
    return res.redirect("/dashboard");
  }

  const user = await UserModel.findUserById(test.userId);

  const result = await pool.query(
    "SELECT topic, correct, total FROM topic_performance WHERE user_id=$1",
    [user.id]
  );

  user.topicPerformance = buildTopicPerformance(result.rows);

  const answers = [];

  test.questions.forEach(q => {

    const key = "q_" + q.id;
    const ans = req.body[key];

    answers.push({
      questionId: q.id,
      answer: ans
    });

  });

  let score = 0;

  test.questions.forEach(q => {

    const submitted = answers.find(
      a => a.questionId === q.id
    );

    if(submitted && submitted.answer === q.correctAnswer){
      score++;
    }

  });

  const percentage =
    (score / test.questions.length) * 100;

  const newDifficulty =
    calculateNewDifficulty(
      test.previousDifficulty,
      percentage
    );
    
await updateTopicPerformance(user.id, test.questions, answers);

  await UserModel.updateDifficulty(
    user.id,
    newDifficulty
  );

  TestModel.updateTestResult(
    testId,
    score,
    percentage,
    newDifficulty
  );

  res.redirect(`/result/${testId}`);

};