var Task = require('../models/task');
var Comment = require('../models/comment');
var User = require('../models/user'); 
var ObjectId = require('mongoose').Types.ObjectId;


exports.addTask = (req, res, next) => {
    req.body.creator = req.user._id;
    Task.insertMany([req.body], (err, result) => {
        if (err) next(err);
        else {
            Task.findById(result[0]._id, (err, task) => {
                if(err) next(err);
                else res.status(200).send(task); 
            }); 
        }
    });
};

exports.getTasks = (req, res, next) => {
    Task.find({ goal: req.query.id }, (err, tasks) => {
        if (err) next(err);
        else res.status(200).send(tasks);
    });
};


exports.addComment = (req, res, next) => {
    req.body.creator = req.user._id;
    Comment.insertMany([req.body], (err, result) => {
        if (err) next(err);
        else {
            Comment.findById(result[0]._id, (err, comment) => {
                if (err) next(err)
                else {
                    User.findById(comment.creator, (err, creatorDetail) => {
                        if (err) next(err);
                        else {
                            comment = comment.toObject();
                            comment.creatorDetail = creatorDetail;
                            res.status(200).send(comment);
                        }
                    });
                }
            });
        }
    });
}

exports.deleteComment = (req, res, next) => {
    Comment.deleteOne({ '_id': req.query.id }, (err, result) => {
        if (err) next(err);
        res.status(200).send();
    })
};

exports.getComments = (req, res, next) => { 
    Comment.aggregate([ 
        { $match: {"task": ObjectId(req.query.id)} }, 
        {
            $lookup:
            {
                from: 'users',
                localField: 'creator',
                foreignField: '_id',
                as: 'creatorDetail'
            }
        },
        { $unwind: '$creatorDetail'},
         
    ], (err, comments)=> {
        if (err) next(err);
        else res.status(200).send(comments);
    });
}
