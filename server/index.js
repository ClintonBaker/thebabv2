import app from '../app';
import mongoose from 'mongoose';
import passport from 'passport';
import LocalStrategy from 'passport-local';

const User = require('../models/user');

//Connect to database
mongoose.connect('mongodb://thebab:pass1234@ds239009.mlab.com:39009/thebab');

//Configure Passport
app.use(
  require('express-session')({
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

app.listen(8080, (req, res) => {
  console.log('Server spinning up!');
});
