var express = require('express');
var router = express.Router();
var userManager = require('../manager/userManager'); 
var auth = require('../config/auth'); 
var User = require('../models/user');

/* GET users listing. */
router.get('/isNameExist', userManager.isNameExist);
router.get('/isEmailExist', userManager.isEmailExist);
router.put('/put', userManager.putUser); 

module.exports = router;
