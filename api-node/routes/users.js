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

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user)
    return res.status(404).send('The name with the given ID was not found');

  res.send(user);
});

module.exports = router;
