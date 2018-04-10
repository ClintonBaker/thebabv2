import express from 'express';
import passport from 'passport';
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
  res.render('index');
});

//Register New User
router.post('/register', (req, res) => {
  const newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, (err, user) => {
    if (!err) {
      passport.authenticate('local');
      res.json();
    }
  });
});

//Login
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json();
});

export default router;
