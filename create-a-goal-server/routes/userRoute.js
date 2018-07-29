var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');

var passport = require('passport');
var isLoggedIn = require('./auth').isLoggedIn;

/* GET users listing. */
router.get('/get/:id', userController.getUser);
router.post('/add', userController.addUser);
router.put('/update', userController.updateUser);


router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin); 
router.post('/signup', passport.authenticate('local-signup', { 
    successRedirect: '/profile', 
    failureRedirect: '/signin', 
    failureFlash: true 
}), function(req, res, info){ 
     res.send('req'); 
});

module.exports = router;
