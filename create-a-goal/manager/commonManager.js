var Goal = require('../models/goal');
var User = require('../models/user'); 

exports.getParticipants = (req, res, next) => { 
    Goal.findById(req.query.id, (err, goal) => { 
        if(err) next(err);
        else{  
            User.find({_id: { $in : goal.participants}}, (err, participants) => {
                if(err) next(err);
                else{ 
                    res.send(participants);
                }
            }); 
        } 
    });
}