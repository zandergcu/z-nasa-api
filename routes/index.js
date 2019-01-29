var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'VueJS Practice'
  });
});

/* GET 'and another page'. */
router.post('/', function(req, res, next) {
  res.render('results', { title: 'Results', form: req.body });
});

module.exports = router;
