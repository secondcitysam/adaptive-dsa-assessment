const pool = require("../database/db");

const updateTopicPerformance = async (userId, questions, answers) => {

  for (const question of questions) {

    const topic = question.topic;

    const submitted = answers.find(
      a => a.questionId === question.id
    );

    const isCorrect =
      submitted && submitted.answer === question.correctAnswer;

    // upsert logic
    await pool.query(`
      INSERT INTO topic_performance (user_id, topic, correct, total)
      VALUES ($1, $2, $3, 1)
      ON CONFLICT (user_id, topic)
      DO UPDATE SET
        total = topic_performance.total + 1,
        correct = topic_performance.correct + $3
    `, [
      userId,
      topic,
      isCorrect ? 1 : 0
    ]);

  }

};

module.exports = {
  updateTopicPerformance
};