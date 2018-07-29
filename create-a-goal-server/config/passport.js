// load all the things we need
var LocalStrategy = require('passport-local').Strategy; 
var db =  require('../repository/createAGoalDB').CreateAGoaldb;
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');

var generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

var isValid = (password1, localPassword) => {
    return  bcrypt.compareSync(password1, localPassword);
}

// expose this function to our app using module.exports
module.exports = function(passport) {  
    passport.serializeUser((user, done) => {
        done(user.id);  
    });

    // used to deserialize the user
    passport.deserializeUser((user, done) => { 
        done(null, {}); 
    }); 

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { 
        if(!email || !password ) { return done(null, false, req.flash('message','All fields are required.')); }

        var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';
  
        db.query("select * from Users where email = ?", [email], function(err, rows){
  
            console.log(err); console.log(rows);
  
          if (err) return done(req.flash('message',err));
  
          if(!rows.length){ return done(null, false, req.flash('message','Invalid username or password.')); }
  
          salt = salt+''+password;
  
          var encPassword = crypto.createHash('sha1').update(salt).digest('hex');
  
  
          var dbPassword  = rows[0].password;
  
          if(!(dbPassword == encPassword)){
  
              return done(null, false, req.flash('message','Invalid username or password.'));
  
           }
  
          return done(null, rows[0]);
  
        });
    }));

};