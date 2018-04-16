import express from 'express';
import session from 'express-session';
import routes from './routes';
import dotenv from 'dotenv';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import webpackDevServer from './webpack/dev-server';
import passport from 'passport';
import LocalStrategy from 'passport-local';

const User = require('./models/user');

//setup dotenv
dotenv.config({
  silent: true
});

//setup express app
const app = express();

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cookie parser
app.use(cookieParser());

//logger
app.use(logger('combined'));

//serve static files
app.use(express.static(path.join(__dirname, '/public')));

//Configure Passport
// app.use(
//   require('express-session')({
//     secret: 'CoWzJump OvArR MooonZ',
//     resave: false,
//     saveUninitialized: false
//   })
// );

app.use(
  session({
    secret: 'CoWzJump OvArR MooonZ',
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//set up routes
app.use('/', routes);

//view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

if (process.env.NODE_ENV != 'production') {
  webpackDevServer(app);
}

export default app;
