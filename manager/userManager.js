var User = require('../models/user')

exports.putUser = (req, res, next) => { 
    User.findById(req.user._id, {hash: 0, salt: 0}, (err, user) => { 
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email; 
        user.photo = req.body.photo || user.photo;  
        user.save((err) => { 
            if(err) next(err);
            else{
                req.logIn(user, function(err) {
                    if (err) { return next(err); }
                    return res.status(200).send(user);
                }); 
            }  
        });
    }); 
};

exports.isNameExist = (req, res, next) => { 
    User.findOne({ 'name': req.query.name}, (err, user) => { 
        if(err) return next(err);
        if(user) res.status(200).send(JSON.stringify(1));
        else res.status(200).send(JSON.stringify(0))
    })
};

exports.isEmailExist = (req, res, next) => {
    User.findOne({ 'email': req.query.email}, (err, user) => {
        if(err) return next(err);
        if(user) res.status(200).send(JSON.stringify(1));
        else res.status(200).send(JSON.stringify(0));
    })
}
 
 