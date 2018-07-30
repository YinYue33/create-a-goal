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

app.use(session({ secret: 'Thespywhodumpedme',resave: false, saveUninitialized:true, cookie: {expires: 360000}})); // session secret
app.use(flash());
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
 // use connect-flash for flash messages stored in session



app.use(express.static(path.join(__dirname, 'public'))); 

app.post('/api/signup', passport.authenticate('local-signup', { 
  successRedirect: '/api/user/suctest', 
  failureRedirect: '/api/signupFail',
  failureFlash: true
}));

app.use('/api/goals', goalsRoute);
app.use('/api/user', userRoute);
app.get('/api/signupFail', (req, res, next) => {
  //res.flash('message','fail')   
  console.log(req.flash('email'));
  res.status(403).send(req.message);
})

// catch 404 and forward to error handler
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
