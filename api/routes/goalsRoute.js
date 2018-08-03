var express = require('express');
var router = express.Router();
var goalsManager = require('../manager/goalManager');

router.post('/add', goalsManager.addGoal); 
router.get('/get/created', goalsManager.getCreatedGoals);
router.get('/get/all', goalsManager.getAllGoals);
router.post('/join', goalsManager.joinGoal);

module.exports = router;
