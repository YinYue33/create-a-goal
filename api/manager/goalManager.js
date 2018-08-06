var Goal = require('../models/goal');

exports.add = (req, res, next) => {
    req.body.creator = req.user._id;
    Goal.insertMany([req.body], (err, result) => {
        if (err) next(err);
        res.status(200).send();
    });
}

exports.getCreated = (req, res, next) => {
    Goal.find({ 'creator': req.user._id }, (err, createdGoals) => {
        if (err) next(err);
        res.send(createdGoals);
    })
};

exports.getAll = (req, res, next) => {
    Goal.find((err, goals) => {
        if (err) next(err);
        res.send(goals);
    })
};

exports.getJoined = (req, res, nexr) => {
    Goal.find({ participants: req.user._id }, (err, goals) => {
        if (err) next(err);
        res.send(goals);
    })
}

exports.delete = (req, res, next) => {
    Goal.deleteOne({ '_id': req.query.id }, (err, result) => {
        if (err) next(err);
        res.status(200).send();
    })
}

exports.join = (req, res, next) => {
    Goal.findById(req.body.goalID, (err, result) => {
        if (err) next(err);
        result.participants.push(req.user._id);
        result.save((err) => {
            if (err) next(err);
            res.status(200).send(result);
        });
    })
}

exports.quit = (req, res, next) => {
    Goal.findById(req.body.goalID, (err, result) => {
        if (err) next(err);
        else {
            console.log(result.participants);
            console.log(req.user._id);
            let index = result.participants.indexOf(req.user._id);
            if (index === -1) return next('you are not in the goal now!');
            result.participants.splice(index, 1);
            result.save((err) => {
                if (err) next(err);
                else res.status(200).send(result);
            });
        }
    })
}