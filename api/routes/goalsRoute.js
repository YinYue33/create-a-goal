var express = require('express');
var router = express.Router();
var goalsManager = require('../manager/goalManager');
var auth = require('../config/auth'); 


router.use(auth.isLoggedIn);

router.get('/get/all', goalsManager.getAllGoals); 
router.get('/get/created', goalsManager.getCreatedGoals);

router.post('/add', goalsManager.addGoal);  
router.post('/join', goalsManager.joinGoal);
router.delete('/delete', goalsManager.deleteGoal);

module.exports = router;
