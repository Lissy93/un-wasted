var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// Define the route files
var index         = require('./routes/index');        // This actually just serves up an empty-ish static HTML view
var findFood      = require('./routes/find-food');    // This will return a list of all foods matching the query
var biteIt        = require('./routes/bite-it');      // Receiver wants to get someones food
var confirmBite   = require('./routes/confirm-bite'); // Verify that the receiver has got what they were promised

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Assign base paths to routes
app.use('/', index);
app.use('/find-food', findFood);
app.use('/bite-it', biteIt);
app.use('/confirm-bite', confirmBite);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
