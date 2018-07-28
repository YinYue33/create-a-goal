var db = require('../repository/createAGoalDB').CreateAGoaldb;

exports.getUser = (req, res, next) => { 
    res.send("get a user not implemented");
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