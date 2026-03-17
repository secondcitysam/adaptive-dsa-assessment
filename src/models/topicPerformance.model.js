const pool = require("../database/db");

const getWeakTopics = async (userId) => {

  const result = await pool.query(`
    SELECT topic, correct, total
    FROM topic_performance
    WHERE user_id = $1
  `, [userId]);

  // prioritize low accuracy ONLY if attempted
  const scored = result.rows
    .filter(r => r.total > 0)
    .map(r => ({
      topic: r.topic,
      accuracy: r.correct / r.total
    }))
    .sort((a,b)=>a.accuracy - b.accuracy);

  return scored.slice(0,2).map(t=>t.topic);

};

module.exports = {
  getWeakTopics
};