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

  const topicPerformance = {};

  result.rows.forEach(row => {
    topicPerformance[row.topic] = {
      correct: row.correct,
      total: row.total
    };
  });

  user.topicPerformance = topicPerformance;

  res.render("dashboard", { user });

};



/* ======================
TEST PAGE
====================== */

exports.testPage = (req,res)=>{

  const testId = req.params.id;

  const test = TestModel.findTestById(testId);

  if(!test){
    return res.redirect("/dashboard");
  }

  res.render("test",{ test });

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

  const topicPerformance = {};

  result.rows.forEach(row => {
    topicPerformance[row.topic] = {
      correct: row.correct,
      total: row.total
    };
  });

  user.topicPerformance = topicPerformance;

  const weakTopics = [];

  Object.keys(user.topicPerformance || {}).forEach(topic => {

    const data = user.topicPerformance[topic];

    if(data.total > 0){

      const accuracy = data.correct / data.total;

      if(accuracy < 0.5){
        weakTopics.push(topic);
      }

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

  const shuffle = arr =>
    arr.sort(() => Math.random() - 0.5);

  prioritized = shuffle(prioritized);
  others = shuffle(others);

  let selectedQuestions = [
    ...prioritized.slice(0,2),
    ...others.slice(0,1)
  ];

  /* ensure minimum 3 questions */

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

  updateTopicPerformance(
    user,
    test.questions,
    answers
  );

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