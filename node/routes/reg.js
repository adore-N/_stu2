var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.files)
  console.log(req.body.a)
  res.render('index', { title: 'Express' });
});

module.exports = router;
