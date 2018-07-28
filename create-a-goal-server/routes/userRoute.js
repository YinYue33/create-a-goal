var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');

/* GET users listing. */
router.get('/get/:id', userController.getUser);
router.post('/add', userController.addUser);
router.put('/update', userController.updateUser);

module.exports = router;
