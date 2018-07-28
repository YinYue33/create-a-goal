var express = require('express');
var router = express.Router();
var goalsController = require('../controller/goalsController');

router.post('/add', goalsController.addGoal);  
router.delete('/delete', goalsController.deleteGoal);
router.put('/update', goalsController.updateGoal);
router.get('/get', goalsController.getGoal);
router.get('/getAll', goalsController.getGoals);


module.exports = router;
