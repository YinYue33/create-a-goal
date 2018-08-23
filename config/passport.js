var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user'); 

module.exports = function (passport) {
    passport.serializeUser((user, done) => {
        done(null, user._id);
    }); 
    
    passport.deserializeUser((id, done) => {
        User.findById(id, {hash: 0, salt: 0}, function (err, user) {  
            done(err, user)
        }); 
    });

    passport.use('local-signup', new LocalStrategy({ 
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true  
    },
        function (req, email, password, done) {
            let name = req.body.name;
            if (!email || !password || !name) {
                return done(null, false, req.flash('error', 'All fields required'));
            }
            User.findOne({ 'email': email }, (err, user) => {
                if (err) return done(err);
                if (user) return done(null, false, req.flash('error', 'email taken'));
                User.findOne({ 'name': req.body.name }, (err, user) => {
                    console.log(req.body.name);
                    console.log(user);
                    if (err) return done(err);
                    if (user) return done(null, false, req.flash('error', 'name taken'));
                    var newUser = new User(); 
                    newUser.name = req.body.name;
                    newUser.email = email;
                    newUser.setPassword(password);
                    newUser.save(err => {
                        newUser = newUser.toObject(); 
                        delete newUser.hash;
                        delete newUser.salt; 
                        if(err) return done(err); 
                        return done(null, newUser);
                    })
                }); 
            });
        }));

    passport.use('local-login', new LocalStrategy({
        passReqToCallback: true
    },
        function (req, username, password, done) {
            if (!username || !password) {
                return done(null, false, req.flash('error', 'All fields required'));
            }
            //can user either email or username to login
            User.findOne({ $or: [ { 'email': username }, { 'name': username } ] }, (err, user) => { 
                if(err) return done(err); 
                if(!user) return done(null, false, req.flash('error', 'username not exist'));
                if(!user.validPassword(password)){
                    return done(null, false, req.flash('error', 'username and password doesn\'t match'));
                }
                user = user.toObject();
                delete user.hash;
                delete user.salt;
                return done(null, user);
            });
        }));
}; 