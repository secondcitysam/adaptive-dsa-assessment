const express = require('express');
const router = express.Router();

const viewController = require('../controllers/view.controller');

/* AUTH PAGES */
router.get('/', viewController.loginPage);
router.get('/register', viewController.registerPage);

/* DASHBOARD */
router.get('/dashboard', viewController.dashboardPage);

router.post('/start-test', viewController.startTest);

/* TEST */
router.get('/test/:id', viewController.testPage);

/* RESULT */
router.get('/result/:id', viewController.resultPage);

/* LOGOUT */
router.post('/logout', viewController.logout);

router.post('/login', viewController.loginUser);
router.post('/register', viewController.registerUser);

module.exports = router;