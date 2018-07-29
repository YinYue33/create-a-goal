// load all the things we need
var LocalStrategy = require('passport-local').Strategy; 
var db =  require('../repository/createAGoalDB'); 
var crypto = require('crypto');
 

// expose this function to our app using module.exports
module.exports = function(passport) {  
    passport.serializeUser((user, done) => {
        done(null, user.id);  
    });

    // used to deserialize the user
    passport.deserializeUser((id, done) => {
        db.User.getUserById(id, (err, result) => { 
            done(err, result[0]);
        }); 
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
  
        db.User.getUserByEmail(email, function(err, rows){  
            if (err) {
                return done(req.flash('message',err));
            }   
  
            if(rows.length > 0){ 
              return done(null, false, req.flash('message','email has been taken')); 
            } 
            salt = salt+''+password; 
            var encPassword = crypto.createHash('sha1').update(salt).digest('hex');
            var newUser = {
                name: req.body.name,
                email: email,
                password: encPassword,
                sign_up_time: new Date()
            } 
            db.User.addOneUser(newUser, (err, result) => {
                db.User.getUserByEmail(email, (err, result) => {
                    console.log(result[0].id);
                    return done(err, result[0]);
                }) 
            });
        });
    })); 
};