var express = require('express');
var router = express.Router();
var goalsManager = require('../manager/goalManager');
var auth = require('../config/auth'); 


router.get('/get/all', goalsManager.getAllGoals);

router.use(auth.isLoggedIn);
router.post('/add', goalsManager.addGoal); 
router.get('/get/created', goalsManager.getCreatedGoals); 
router.post('/join', goalsManager.joinGoal);

module.exports = router;
