const express = require('express');
const session = require('express-session');
const path = require('path');


const indexRoutes = require('./routes/index.routes');
const viewRoutes = require('./routes/view.routes');

const loggerMiddleware = require('./middlewares/logger.middleware');
const errorHandler = require('./middlewares/error.middleware');

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(loggerMiddleware);

app.use(session({
  secret: 'adaptive-secret',
  resave: false,
  saveUninitialized: false
}));


/* EJS VIEW ENGINE */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* STATIC FILES */
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', indexRoutes);
app.use('/', viewRoutes);


app.use(errorHandler);

module.exports = app;