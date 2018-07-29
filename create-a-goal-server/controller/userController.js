var db = require('../repository/createAGoalDB').CreateAGoaldb;
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

exports.getUser = (req, res, next) => {  
    let sql = 'select * from Users where user_id =' + mysql.escape(req.params.id); 
    db.query(sql, (err, result) => { 
        if(err) res.send(err); 
        res.send(result);
    }) 
    
}

exports.addUser = (req, res, next) => { 
    res.send("add a user not implemented");
}

exports.updateUser = (req, res, next) => { 
    res.send("update a user not implemented");
} 


 
// (user) => { 
//     createAGoaldb.query('INSERT INTO Users SET ?', user, 
//     (err, res) =>{ 
        
//     });
// }