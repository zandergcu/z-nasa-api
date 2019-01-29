var createError = require('http-errors');
var express = require('express'),
    expressValidator = require('express-validator');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet')
const axios = require('axios');

var indexRouter = require('./routes/index');

var app = express();

const validatorOptions ={

}
app.use(expressValidator(validatorOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "https://cdn.jsdelivr.net", "https://unpkg.com", "'unsafe-inline'", "'unsafe-eval'"],
    connectSrc: ["https://api.nasa.gov", "https://apod.nasa.gov"],
    imgSrc: ["'self'", "https://apod.nasa.gov"]
  }
}))

app.use('/', indexRouter);

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
  res.render('error');
});

module.exports = app;
