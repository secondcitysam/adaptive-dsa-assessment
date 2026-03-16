const pool = require("../database/db");

const getWeakTopics = async (userId) => {

  const result = await pool.query(
    `
    SELECT topic, correct, total
    FROM topic_performance
    WHERE user_id = $1
    `,
    [userId]
  );

  const weak = [];

  result.rows.forEach(row => {

    if(row.total > 0){

      const accuracy = row.correct / row.total;

      if(accuracy < 0.5){
        weak.push(row.topic);
      }

    }

  });

  return weak;

};

module.exports = {
  getWeakTopics
};