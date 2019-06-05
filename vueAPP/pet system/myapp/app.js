var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var commentsRouter = require('./routes/comments');
var goodsRouter = require('./routes/goods');
var ordersRouter = require('./routes/orders');
var petOwnersRouter = require('./routes/petOwners');
var serversRouter = require('./routes/servers');
var shopsRouter = require('./routes/shops');

require('./dao/database');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const session = require("express-session");
//配置session
app.use(session({
  secret: 'acg',
  resave: false,
  saveUninitialized: true
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments', commentsRouter);
app.use('/goods', goodsRouter);
app.use('/orders', ordersRouter);
app.use('/petOwners', petOwnersRouter);
app.use('/service', serversRouter);
app.use('/shops', shopsRouter);



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

app.listen('3000',()=>{
  console.log('http://localhost:3000/启动成功！');
})

module.exports = app;
