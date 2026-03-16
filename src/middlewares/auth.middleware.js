const UserModel = require('../models/user.model');

const authMiddleware = (req, res, next) => {
  const userId = req.headers['userid'];

  if (!userId) {
    return res.status(401).json({
      success: false,
      message: "UserId header missing"
    });
  }

  const user = UserModel.findUserById(userId);

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid user"
    });
  }

  req.user = user;

  next();
};

module.exports = authMiddleware;