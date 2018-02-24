var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Un-Wasted!', subtitle: 'Your Bite on the Block' });
});

module.exports = router;
