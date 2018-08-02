var express = require('express');
var router = express.Router();
var userManager = require('../manager/userManager'); 
var auth = require('../config/auth');

/* GET users listing. */

router.use(auth.isLoggedIn);

router.get('/get/:id', auth.isSelf, userManager.getUserByID); 
router.get('/profile', userManager.getUserByID); 
router.get('/suctest', (req,res,next) => { 
    console.log(req);
    res.send('secret');
} )

module.exports = router;
