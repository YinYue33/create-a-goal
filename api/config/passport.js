// load all the things we need
var LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto');
var User = require('../models/user');


// expose this function to our app using module.exports
module.exports = function (passport) {
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    // used to deserialize the user
    passport.deserializeUser((id, done) => {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
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
                    if (err) return done(err);
                    if (user) return done(null, false, req.flash('error', 'name taken'));
                    var newUser = new User(); 
                    newUser.name = req.body.name;
                    newUser.email = email;
                    newUser.setPassword(password);
                    newUser.save(err => {
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
            User.findOne({ $or: [ { 'email': username }, { 'name': username } ] }, (err, user) => {
                if(err) return done(err); 
                if(!user) return done(null, false, req.flash('error', 'username not exist'));
                if(!user.validPassword(password)){
                    return done(null, false, req.flash('error', 'username and password doesn\'t match'));
                }
                return done(null, user);
            });
        }));
}; 