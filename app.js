var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var login = require('./routes/login');
var signup = require('./routes/signup');
var film = require('./routes/film');
var films = require('./routes/films');
var risultato = require('./routes/risultato');
var tvshow = require('./routes/tvshow');
var tvresults = require('./routes/tvresults');
var chatRouter = require('./routes/chat'); 

var app = express();

//INIZIO parte per la socket
const APP_PORT = 5555;

const server = app.listen(APP_PORT, () => {
  console.log(`App running on port ${APP_PORT}`);
})
const io = require('socket.io').listen(server);
//FINE roba sulla socket

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/films', films)
app.use('/login', login);
app.use('/signup',signup);
app.use('/film', film);
app.use('/risultato', risultato);
app.use('/tvshow', tvshow);
app.use('/risultato', risultato);
app.use('/tvresults', tvresults);
app.use('/chat', chatRouter);  //collegamento file

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

//altre robe sulla socket
io.on('connection', (socket) => {
  console.log('a user connected')
})

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('chatter', (message) => {
    console.log('chatter : ', message)
    io.emit('chatter', message)
  })
})

module.exports = app;
