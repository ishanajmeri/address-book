const express = require('express');
const app = express();
const users = require('./routes/users');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user');

mongoose
  .connect('mongodb://localhost/addressbook', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Connected to mongodb://localhost/addressbook'))
  .catch((err) => console.log('Could not connect to MongoDB..', err));

const corsOptions = {
  origin: true,
  credentials: true,
};
app.options('*', cors(corsOptions));
app.use(express.json());
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'content-type');
  res.header('Access-Control-Allow-Headers', 'x-auth-token');
  next();
});
app.use('/api/users', users);

app.listen('3900', () => console.log('on port 3900'));
