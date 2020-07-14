const express = require('express');
const { User, validate } = require('../models/user');
const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = new User({ name: req.body.name, number: req.body.number });
  user = await user.save();

  res.send(user);
});

module.exports = router;
