var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('cool', { title: "You're Cool" });
});

module.exports = router;
