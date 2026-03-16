const express = require('express');
const router = express.Router();

const testController = require('../controllers/test.controller');
const authMiddleware = require('../middlewares/auth.middleware');


router.post(
  '/start',
  authMiddleware,
  testController.startTest
);


router.post(
  '/submit',
  authMiddleware,
  testController.submitTest
);

module.exports = router;