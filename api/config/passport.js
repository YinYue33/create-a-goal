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
        let name = req.body.name; 
        if(!email || !password || !name) { 
            return done(null, false, req.flash( 'error', 'All fields required')); 
        }
        db.User.getUserByEmailOrName(email, name, handleCheckDuplicate(req, done));
    })); 

    passport.use('local-login', new LocalStrategy({
        passReqToCallback : true
    },
    function(req, username, password, done) {
        if(!username || !password) { 
            return done(null, false, req.flash('error', 'All fields required')); 
        }
        db.User.getUserByUsername(username, (err, result) => {
            if(err) return done(err);
            if(result.length === 0){  
                return done(null, false,req.flash('error', 'User doesn\'t exist, sign up first')); 
            }
            let user = result[0]; 
            if(crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex') !== user.hash){
                return done(null, false, req.flash('error', 'Password and Username doesn\' match'));
            };
            return done(null, user);
        });
    })); 
};
 
function handleCheckDuplicate(req, done){
    return (err, result) => {
        if (err) {
            return done(err);
        } 
        if(result.length > 0){  
          return done(null, false, req.flash('error', 'email or username taken')); 
        } 
        let newUser = {
            name: req.body.name,
            email: req.body.email,
            sign_up_time: new Date()
        } 
        newUser.salt = crypto.randomBytes(16).toString('hex');
        newUser.hash = crypto.pbkdf2Sync(req.body.password, newUser.salt, 1000, 64, 'sha512').toString('hex');
        db.User.addOneUser(newUser, (err) => {
            if(err) return done(err);
            db.User.getUserByEmail(req.body.email, (err, result) => { 
                if(err) return done(err);
                return done(null, result[0]);
            }) 
        });
    } 
} 