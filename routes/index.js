import express from 'express';
import passport from 'passport';
const router = express.Router();
const User = require('../models/user');
const Thing = require('../models/thing');

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

//Post New Thing
router.post('/thing', (req, res) => {
  const newThing = new Thing({
    name: req.body.name,
    link: req.body.link,
    description: req.body.description,
    tags: req.body.tags,
    comments: req.body.comments
  });

  Thing.create(newThing, (err, newlyCreated) => {
    if (!err) {
      res.json({ id: newlyCreated.id });
    }
  });
});

//Get Thing from DB
router.get('/thing/:id?', (req, res) => {
  if (req.params.id) {
    Thing.findById(req.params.id, (err, foundThing) => {
      if (!err) {
        res.json(foundThing);
      }
    });
  } else {
    Thing.find({}, (err, allThings) => {
      if (!err) {
        res.json(allThings);
      }
    });
  }
});

//Login
router.post('/login', passport.authenticate('local'), (req, res) => {
  return res.json();
});

//Logout
router.get('/logout', (req, res) => {
  req.logout();
  return res.json();
});

//User is authenticated?
router.get('/user', (req, res) => {
  return res.json({ user: req.user });
});

router.get('*', (req, res) => {
  res.render('index');
});

export default router;
