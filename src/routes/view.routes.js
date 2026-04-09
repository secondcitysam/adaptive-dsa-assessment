const express = require('express');
const router = express.Router();

const viewController = require('../controllers/view.controller');



router.get('/', viewController.loginPage);
router.get('/register', viewController.registerPage);

router.post('/login', viewController.loginUser);
router.post('/register', viewController.registerUser);




router.get('/dashboard', viewController.dashboardPage);




router.post('/start-test', viewController.startTest);




router.get('/test/:id', viewController.testPage);



router.post('/submit-test', viewController.submitTest);




router.get('/result/:id', viewController.resultPage);




router.post('/logout', viewController.logout);

module.exports = router;