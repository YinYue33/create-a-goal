var express = require('express');
var router = express.Router();
var userManager = require('../manager/userManager');

var passport = require('passport');
var isLoggedIn = require('./auth').isLoggedIn;

/* GET users listing. */
router.get('/get/:id', userManager.getUserByID); 
router.post('/signup', passport.authenticate('local-signup', { 
    successRedirect: 'get/2', 
    failureRedirect: 'get/1'
}));

module.exports = router;
