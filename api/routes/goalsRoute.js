var express = require('express');
var router = express.Router();
var goalsManager = require('../manager/goalManager');
var auth = require('../config/auth'); 


router.use(auth.isLoggedIn);

router.get('/get/all', goalsManager.getAll); 
router.get('/get/created', goalsManager.getCreated);
router.get('/get/joined', goalsManager.getJoined);

router.post('/add', goalsManager.add);  
router.post('/join', goalsManager.join);
router.post('/quit', goalsManager.quit)
router.delete('/delete', goalsManager.delete);



module.exports = router;
