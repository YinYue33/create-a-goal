var express = require('express');
var router = express.Router();
var userManager = require('../manager/userManager'); 
var auth = require('../config/auth'); 
var User = require('../models/user');

/* GET users listing. */

//router.use(auth.isLoggedIn);

router.get('/get/all', (req, res, next) => {  
     User.find((err, users) => {
         if(err) next(err);
         res.send(users);
     });  
});
 

module.exports = router;
