const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* Get user. TODO*/
router.get('/:id', function (req, res, next) {
  res.send('get user');
});

/* Create user. TODO*/
router.post('/', async (req, res) => {
  const { username } = req.body;
  try {
    const newUser = new User({ username });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).send({ error: 'Failed to save user' });
  }
});

/* Update user. TODO*/
router.put('/:id', function (req, res, next) {
  res.send('update user');
});

/* Delete user. TODO*/
router.delete('/:id', function (req, res, next) {
  res.send('delete user');
});

module.exports = router;
