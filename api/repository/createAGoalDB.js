var mysql = require('mysql');
var db  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'Ilovezzb519',
  database : 'CreateAGoal'
}); 

exports.User = {
  addOneUser: (user, callback) => {
    db.query('INSERT INTO Users SET ?', user, callback);  
  },

  getUserByEmail: (email, callback) => {
    db.query('select * from Users where email = ?', email, callback); 
  },

  getUserById: (id, callback) => {
    db.query('select * from Users where id = ?', id, callback);
  },

  getUserByEmailOrName: (email, name, callback) => {
    db.query('select * from Users where email = ? or name = ?', [email, name], callback);
  },

  getUserByUsername: (username, callback) => {
    db.query('select * from Users where email = ? or name = ?', [username, username], callback);
  }
}