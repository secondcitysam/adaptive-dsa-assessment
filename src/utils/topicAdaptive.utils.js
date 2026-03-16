

const updateTopicPerformance = (user, questions, answers) => {

  questions.forEach(question => {

    const topic = question.topic;

    const submitted = answers.find(
      a => a.questionId === question.id
    );

    if (!user.topicPerformance[topic]) return;

    user.topicPerformance[topic].total++;

    if (
      submitted &&
      submitted.answer === question.correctAnswer
    ) {
      user.topicPerformance[topic].correct++;
    }
  });
};



const getWeakTopics = (user) => {
  const performance = user.topicPerformance;

  const topicScores = Object.keys(performance).map(topic => {

    const data = performance[topic];

    const accuracy =
      data.total === 0
        ? 1
        : data.correct / data.total;

    return { topic, accuracy };
  });

  topicScores.sort((a, b) => a.accuracy - b.accuracy);

  return topicScores.slice(0, 2).map(t => t.topic);
};

module.exports = {
  updateTopicPerformance,
  getWeakTopics
};