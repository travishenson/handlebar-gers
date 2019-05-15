var express = require('express');

var router = express.Router();

var burger = require('../models/burger-model');

router.get('/', function (req, res) {
  burger.selectAll(function (data) {
    var dataObject = {
      burgers: data
    };
    console.log(dataObject);
    res.render('index', dataObject);
  })
})

router.post('/api/burgers', function (req, res) {
  burger.insertOne(
    ['burger_name', 'devoured'],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      res.json({ id: result.id })
    });
});

module.exports = router;