/* Import node modules, mostly for Express */
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

/* Get Credentials/ API keys file */
const credentials = require('./config/credentials');

/* Define the route files */
const index = require('./routes/index');                // This actually just serves up an empty-ish static HTML view
const findFood = require('./routes/find-food');         // This will return a list of all foods matching the query
const biteIt = require('./routes/bite-it');             // Receiver wants to get someones food
const confirmBite = require('./routes/confirm-bite');   // Verify that the receiver has got what they were promised
const addFoodItem = require('./routes/add-food-item');  // Add a new item of food, to the db

/* Initialise new Express app */
const app = express();

/* Setup View Engines */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/* Connect to Mongo */
const mongoCredentials = credentials.mongoCredentials;
mongoose.connect(
    'mongodb://' +
    mongoCredentials.username+':' +
    mongoCredentials.password+'@' +
    mongoCredentials.domain+':' +
    mongoCredentials.port+'/' +
    mongoCredentials.database
).then(
    () => { console.info(`Mongo connected to ${ mongoCredentials.database } DB`); },
    err => { console.warn('Failed to connect to MongoDB', err); }
);

/* Assign Express Middleware */
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Assign base paths to routes */
app.use('/', index);
app.use('/find-food', findFood);
app.use('/bite-it', biteIt);
app.use('/confirm-bite', confirmBite);
app.use('/add-food-item', addFoodItem);

/* Catch 404 and forward to error handler */
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
  next(err);
});

/* error handler */
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
