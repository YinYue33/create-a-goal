var mysql = require('mysql');
var createAGoalPool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'Ilovezzb519',
  database : 'CreateAGoal'
}); 

exports.CreateAGoaldb = createAGoalPool;