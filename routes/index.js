import express from 'express';
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/register', (req, res) => {
  const newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password);
});

export default router;
