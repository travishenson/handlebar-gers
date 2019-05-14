var express = require('express');

var router = express.Router();

var burger = require('../models/burger-model');

router.get('/', function (req, res) {
  res.render('index');
});

module.exports = router;