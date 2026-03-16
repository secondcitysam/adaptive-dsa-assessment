const UserModel = require('../models/user.model');


/* =========================
REGISTER USER
========================= */

exports.registerUser = async (req, res, next) => {
  try {

    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password required"
      });
    }

    const existingUser =
      await UserModel.findUserByUsername(username);

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    const user =
      await UserModel.createUser(username, password);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        userId: user.id,
        difficulty: user.current_difficulty || 1
      }
    });

  } catch (error) {
    next(error);
  }
};



/* =========================
LOGIN USER
========================= */

exports.loginUser = async (req, res, next) => {
  try {

    const { username, password } = req.body;

    const user =
      await UserModel.findUserByUsername(username);

    if (!user || user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        userId: user.id,
        difficulty: user.current_difficulty
      }
    });

  } catch (error) {
    next(error);
  }
};



/* =========================
UPDATE PASSWORD
========================= */

exports.updatePassword = async (req, res, next) => {
  try {

    const { username, newPassword } = req.body;

    if (!username || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Username and new password required"
      });
    }

    const user =
      await UserModel.updatePassword(username, newPassword);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Password updated successfully"
    });

  } catch (error) {
    next(error);
  }
};



/* =========================
GET PERFORMANCE
========================= */

exports.getPerformance = async (req, res, next) => {
  try {

    const user = req.user;

    res.status(200).json({
      success: true,
      data: {
        difficulty: user.current_difficulty,
        topicPerformance: user.topicPerformance
      }
    });

  } catch (error) {
    next(error);
  }
};