const express = require('express');
const authRoutes = require('./auth.routes');
const testRoutes = require('./test.routes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/tests', testRoutes);

router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is healthy'
  });
});

module.exports = router;