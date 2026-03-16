const { v4: uuidv4 } = require('uuid');

const tests = [];



const createTest = (userId, questions, difficulty) => {
  const test = {
    id: uuidv4(),
    userId,
    questions,
    previousDifficulty: difficulty,
    score: 0,
    percentage: 0,
    newDifficulty: difficulty
  };

  tests.push(test);
  return test;
};

const findTestById = (testId) => {
  return tests.find(t => t.id === testId);
};

const updateTestResult = (testId, score, percentage, newDifficulty) => {
  const test = findTestById(testId);

  if (test) {
    test.score = score;
    test.percentage = percentage;
    test.newDifficulty = newDifficulty;
  }

  return test;
};

module.exports = {
  createTest,
  findTestById,
  updateTestResult
};