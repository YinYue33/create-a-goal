var express = require('express');
var router = express.Router();
var commonManager = require('../manager/commonManager');

router.get('/participants', commonManager.getParticipants); 
module.exports = router;