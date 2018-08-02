var db = require('../repository/createAGoalDB');
var bcrypt  = require('bcrypt-nodejs');
var mysql = require('mysql');

var generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

var isValid = (password1, localPassword) => {
    return  bcrypt.compareSync(password1, localPassword);
}

exports.getLogin = (req, res, next) => { 
    res.send(req.flash('loginMessage'));
}

exports.postLogin = (req, res, next) => { 
    res.send('unimplemented post login');
}

exports.getSignUp = (req, res, next) => { 
    res.send(req.flash('signupMessage'));
}

exports.getUserByID = (req, res, next) => {   
    db.User.getUserById(req.params.id || req.user.id, (err, result) => {
        res.send(err || result);
    });  
}

exports.addUser = (req, res, next) => { 
    res.send("add a user not implemented");
}

exports.updateUser = (req, res, next) => { 
    res.send("update a user not implemented");
} 
 
 