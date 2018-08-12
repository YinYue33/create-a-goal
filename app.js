var express = require('express');
var createError = require('http-errors'); 
var path = require('path'); 
var bodyParser = require('body-parser'); 
var logger = require('morgan');
var cors = require('cors');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport'); 

var goalsRoute = require('./routes/goalsRoute');
var userRoute = require('./routes/userRoute');
var commonRoute = require('./routes/commonRoute');
var taskRoute = require('./routes/taskRoute');  
var sessionSecret;

if (process.env.NODE_ENV === 'production') {
  sessionSecret = process.env.SESSION_SECRET;
}else{
  sessionSecret = require('./config/environment').sessionSecret;
}

require('./config/passport')(passport);
require('./config/db'); 

var app = express(); 
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.set('view engine', 'pug') 
app.use(logger('dev')); 
app.use(bodyParser.urlencoded({limit: '5mb'}, { extended: false })); //limit is for profile photo
app.use(bodyParser.json({limit: '5mb'}));  

app.use(session({ secret: sessionSecret, resave: false, saveUninitialized:true, cookie: {expires: 3600000}})); // session secret
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());  
  
//default
app.get('/', (req, res, next) => {
  res.render('index', {userID: req.user? req.user._id : null});
}) 

//static files
app.use(express.static(path.join(__dirname, 'public'))); 

//get sesseion user
app.get('/api/sessionUser', (req, res) => {
  res.status(200).send(req.user);
})

app.post('/api/signup', (req, res, next) => {
  passport.authenticate('local-signup', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.status(401).send(req.flash('error')); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.status(200).send(user);
    });
  })(req, res, next);
}); 

app.post('/api/login', (req, res, next) => {
  passport.authenticate('local-login', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.status(401).send(req.flash('error')); }
    req.logIn(user, function(err) {
      if (err) { return next(err); } 
      return res.status(200).send(user);
    });
  })(req, res, next);
}); 

app.get('/api/logout', function(req, res){
  req.logout();
  res.status(200).send();
}); 

app.use('/api/goal', goalsRoute);
app.use('/api/user', userRoute); 
app.use('/api/common', commonRoute);
app.use('/api/task', taskRoute); 

app.use((req, res, next) => {  
  res.render('index', {userID: req.user? req.user._id : null});
})
 
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
