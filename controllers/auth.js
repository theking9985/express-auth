var express = require('express');
var router = express.Router();

router.get('/signup', function(req, res) {
  res.send('signup page');
});

router.post('/signup', function(req, res) {
  res.send(req.body);
});

router.get('/login', function(req, res) {
  res.send('login page');
});

router.post('/login', function(req, res) {
  res.send(req.body);
});

module.exports = router;
