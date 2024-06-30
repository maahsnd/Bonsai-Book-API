const asyncHandler = require('express-async-handler');
const User = require('../models/User.js');

require('dotenv').config();
const { body, validationResult } = require('express-validator');


exports.create_user = asyncHandler(async (req, res) => {
    const { username } = req.body;
    try {
      const newUser = new User({ username });
      await newUser.save();
      res.status(201).send(newUser);
    } catch (error) {
      console.error('Error saving user:', error);
      res.status(500).send({ error: 'Failed to save user' });
    }
  })

exports.get_user = asyncHandler(async (req, res, next) => {
  const data = await User.findOne({ _id: req.params.id })
    .exec();
  res.status(200).json(data);
});
