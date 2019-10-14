'use strict';  //controllo variabili non dichiarate
//dependencies
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');         //needs for flash
var socketIO = require('socket.io');                //for websocket chat
const mongoose = require('mongoose');               //database
const flash = require('connect-flash');             //notification messages
const passport = require('passport');               //for authentication

//loads Key
const keys = require("./config/keys")

//get for pages
var HP = require('./routes/homepage');
var home_film = require('./routes/home_film');
var risultato_film = require('./routes/risultato_film');
var search_film = require('./routes/search_film');
var home_tvshow = require('./routes/home_tvshow');
var risultato_TV = require('./routes/risultato_TV');
var search_TV = require('./routes/search_TV');
var chatRouter = require('./routes/chat');
var authRouter = require('./routes/auth');
//var profile = require('./routes/profile')
var app = express();

//flash middleware
app.use(flash());

//espress session middleware
app.use(session({
  secret: 'porcoPEO#',
  resave: true,
  saveUninitialized: true
}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//load user model
require('./models/user');

//Passport config
require('./config/passport')(passport);


//connect to mongoDB
mongoose.connect(keys.mongoUri, () => {
    console.log("connected to mongoDB");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', HP);
app.use('/homepage', HP);
app.use('/search_film', search_film)
app.use('/home_film', home_film);
app.use('/risultato_film', risultato_film);
app.use('/home_tvshow', home_tvshow);
app.use('/risultato_TV', risultato_TV);
app.use('/search_TV', search_TV);
app.use('/chat', chatRouter); 
app.use('/auth', authRouter); 

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  var express = require('express');
  var router = express.Router();
  module.exports = router;
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Set global vars (for navbar and error messages)
app.use(function(req, res, next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//server listenting on port & websocket
var APP_PORT = process.env.PORT || 3000

const server = app.listen(APP_PORT, () => {
  console.log(`App running on port ${APP_PORT}`);
})

const io = socketIO(server);  //formazione WebSocket

//connessione con la socket
io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('chatter', (message) => {
    console.log('chatter : ', message)
    io.emit('chatter', message)
  })
})


module.exports = app;
