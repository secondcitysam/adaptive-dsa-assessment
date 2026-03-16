const { v4: uuidv4 } = require('uuid');
const pool = require('../database/db');

const createUser = async (username,password)=>{

  const id = uuidv4();

  await pool.query(
    `INSERT INTO users (id,username,password)
     VALUES ($1,$2,$3)`,
    [id,username,password]
  );

  return { id,username };

};

const findUserByUsername = async (username)=>{

  const res = await pool.query(
    `SELECT * FROM users WHERE username=$1`,
    [username]
  );

  return res.rows[0];

};

const findUserById = async (id)=>{

  const res = await pool.query(
    `SELECT * FROM users WHERE id=$1`,
    [id]
  );

  return res.rows[0];

};

const updateDifficulty = async (userId,difficulty)=>{

  await pool.query(
    `UPDATE users
     SET current_difficulty=$1
     WHERE id=$2`,
     [difficulty,userId]
  );

};

module.exports = {
  createUser,
  findUserByUsername,
  findUserById,
  updateDifficulty
};