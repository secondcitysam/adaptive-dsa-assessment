const express = require('express');
const router = express.Router();

const viewController = require('../controllers/view.controller');

/* AUTH PAGES */

router.get('/', viewController.loginPage);
router.get('/register', viewController.registerPage);

router.post('/login', viewController.loginUser);
router.post('/register', viewController.registerUser);


/* DASHBOARD */

router.get('/dashboard', viewController.dashboardPage);


/* START TEST */

router.post('/start-test', viewController.startTest);


/* TEST PAGE */

router.get('/test/:id', viewController.testPage);


/* SUBMIT TEST */

router.post('/submit-test', viewController.submitTest);


/* RESULT */

router.get('/result/:id', viewController.resultPage);


/* LOGOUT */

router.post('/logout', viewController.logout);

module.exports = router;