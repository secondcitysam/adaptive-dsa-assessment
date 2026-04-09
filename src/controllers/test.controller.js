const QuestionModel = require('../models/question.model');
const TestModel = require('../models/test.model');
const UserModel = require('../models/user.model');

const { calculateNewDifficulty } =
  require('../utils/adaptive.utils');

const {
  updateTopicPerformance,
  getWeakTopics
} = require('../utils/topicAdaptive.utils');



exports.startTest = async (req, res, next) => {
  try {

    const user = req.user;
    const difficulty = user.current_difficulty || user.currentDifficulty;


    const questions =
      QuestionModel.getQuestionsByDifficulty(
        difficulty
      );

    if (!questions.length) {
      return res.status(404).json({
        success: false,
        message: "No questions available"
      });
    }


    const weakTopics = getWeakTopics(user);


    let prioritized = questions.filter(q =>
      weakTopics.includes(q.topic)
    );

    let others = questions.filter(
      q => !weakTopics.includes(q.topic)
    );


    const shuffle = arr =>
      arr.sort(() => Math.random() - 0.5);


    prioritized = shuffle(prioritized);
    others = shuffle(others);


    const selectedQuestions = [
      ...prioritized.slice(0, 1),
      ...others.slice(0, 1)
    ];


    const test = TestModel.createTest(
      user.id,
      selectedQuestions,
      difficulty
    );


    res.status(200).json({
      success: true,
      message: "Test started",
      data: {
        testId: test.id,
        difficulty,
        weakTopics,
        questions: selectedQuestions.map(q => ({
          id: q.id,
          title: q.title,
          description: q.description,
          topic: q.topic
        }))
      }
    });

  } catch (error) {
    next(error);
  }
};






exports.submitTest = async (req, res, next) => {
  try {

    const { testId, answers } = req.body;

    const test =
      TestModel.findTestById(testId);

    if (!test) {
      return res.status(404).json({
        success: false,
        message: "Test not found"
      });
    }


    let score = 0;


    test.questions.forEach(question => {

      const submitted = answers.find(
        a => a.questionId === question.id
      );

      if (
        submitted &&
        submitted.answer === question.correctAnswer
      ) {
        score++;
      }

    });


    const percentage =
      (score / test.questions.length) * 100;


    const user =
      await UserModel.findUserById(test.userId);


    updateTopicPerformance(
      user,
      test.questions,
      answers
    );


    const newDifficulty =
      calculateNewDifficulty(
        test.previousDifficulty,
        percentage
      );


    await UserModel.updateDifficulty(
      test.userId,
      newDifficulty
    );


    TestModel.updateTestResult(
      testId,
      score,
      percentage,
      newDifficulty
    );


    res.status(200).json({
      success: true,
      message: "Test submitted",
      data: {
        score,
        percentage,
        previousDifficulty:
          test.previousDifficulty,
        newDifficulty,
        topicPerformance:
          user.topicPerformance
      }
    });

  } catch (error) {
    next(error);
  }
};