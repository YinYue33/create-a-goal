var express = require('express');
var router = express.Router();
var userManager = require('../manager/userManager'); 
var isLoggedIn = require('../config/auth').isLoggedIn;

/* GET users listing. */

//router.use(isLoggedIn);
router.get('/get/:id', userManager.getUserByID); 

router.get('/suctest', (req,res,next) => { 
    res.send('secret');
} )

module.exports = router;
