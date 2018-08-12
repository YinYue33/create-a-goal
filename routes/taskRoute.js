var express = require('express');
var router = express.Router();
var taskManager = require('../manager/taskManager');
var auth = require('../config/auth'); 

//router.use(auth.isLoggedIn);

router.post('/add', taskManager.addTask);
router.post('/add/comment', taskManager.addComment);
router.delete('/delete/comment', taskManager.deleteComment);
router.get('/tasks', taskManager.getTasks);
router.get('/comments', taskManager.getComments);

module.exports = router;