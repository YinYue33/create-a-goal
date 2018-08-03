 var Goal = require('../models/goal');

exports.addGoal = (req, res, next) => { 
    req.body.creator = req.user._id; 
    Goal.insertMany([req.body], (err, result) => {
        if(err) next(err);
        res.status(200).send();
    });
} 

exports.getCreatedGoals = (req, res, next) =>{  
    Goal.find({'creator': req.user._id}, (err, createdGoals) => { 
        if(err) next(err);
        res.send(createdGoals);
    }) 
};

exports.getAllGoals = (req, res, next) =>{
    Goal.find((err, goals) => {
        if(err) next(err);
        res.send(goals);
    })
}; 

exports.deleteGoal = (req, res, next) =>{ 
    Goal.deleteOne({'_id': req.query.id}, (err, result) => {
        if(err) next(err);
        res.status(200).send();
    })
}

exports.joinGoal = (req, res, next) => {
    Goal.findById(req.body.goalID, (err, result) => {
        if(err) next(err);
        result.participants.push(req.user._id);
        result.save((err) => {
            if(err) next(err);
            res.status(200).send(result);
        }); 
    })
} 