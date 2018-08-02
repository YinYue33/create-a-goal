var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'); 
var logger = require('morgan');
var passport = require('passport'); 
require('./config/passport')(passport);
var cors = require('cors');
var session = require('express-session');
var flash = require('connect-flash');  

var app = express();  
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(logger('dev'));
//app.use(cookieParser('Thespywhodumpedme'));
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json()); 

var goalsRoute = require('./routes/goalsRoute');
var userRoute = require('./routes/userRoute');

// required for passport

app.use(session({ secret: 'Thespywhodumpedme',resave: false, saveUninitialized:true, cookie: {expires: 3600000}})); // session secret
app.use(flash());
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
 // use connect-flash for flash messages stored in session 
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/api/isLoggedIn', (req, res) => {
  res.status(200).send(req.isAuthenticated());
})

app.post('/api/signup', (req, res, next) => {
  passport.authenticate('local-signup', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.status(401).send(req.flash('error')); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.status(200).send(JSON.stringify('ok'));
    });
  })(req, res, next);
}); 

app.post('/api/login', (req, res, next) => {
  passport.authenticate('local-login', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.status(401).send(req.flash('error')); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.status(200).send(JSON.stringify('ok'));
    });
  })(req, res, next);
}); 

app.use('/api/goals', goalsRoute);
app.use('/api/user', userRoute); 

app.get('/api/logout', function(req, res){
  req.logout();
  res.send('logged out sucessfully!');
}); 
 
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
