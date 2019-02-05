var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'VueJS Practice'
  });
});

/* GET apod page. */
router.get('/apod', function(req, res, next) {
  res.render('apod', {
    title: 'Astronomy Picture Of the Day'
  });
});

/* GET asteroids page. */
router.get('/asteroids', function(req, res, next) {
  res.render('asteroids', {
    title: 'Nasa API Asteroids'
  });
});

/* POST to apod to get results */
router.post('/apod', function(req, res, next) {
  res.render('results', { title: 'Results', form: req.body });
});

module.exports = router;
