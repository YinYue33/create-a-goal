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

exports.Goal = {
  addGoal: (goal, callback) => {
    db.query('INSERT INTO Goals SET ?', goal, callback);
  },

  getCreatedGoals: (id, callback) => {
    db.query('select * from Goals where creator = ?', id, callback);
  },

  getAllGoals: (callback) => {
    db.query('select * from Goals order by startDate desc', callback);
  },

  getAllUpcomingGoals: (callback) => {
    db.query('select * from Goals where startDate > ?', Date.now(), callback);
  },

  getAllOngoingGoals: (callback) => {
    db.query('select * from Goals where startDate <= ? and endDate >= ?', [ Date.now(), Date.now()], callback);
  },

  getAllFinishedGoals: (callback) => {
    db.query('select * from Goals where endDate > ?', Date.now(), callback);
  },

  deleteGoal: (id, callback) => {
    db.query('delete from Goals where id = ?', id, callback);
  },

  joinGoal: (goalID, userID, callback) => {
    db.query('Insert into GroupMember set ?', {goalID: goalID, userID: userID}, callback);
  }
}