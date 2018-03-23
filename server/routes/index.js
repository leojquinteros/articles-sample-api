'use strict';
const express = require('express');
const config = require('../config/config');

const app = express();

app.use('/users', require('./root/users'));
app.use('/articles', require('./root/articles'));

app.use((req, res, next) => {
  res.status(404).json({
      status: 404,
      error:'Resource not found: ' + req.url
  });
});

module.exports = app;