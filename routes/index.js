var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'VueJS Practice',
    description: 'NASA API practice.',
    url: 'https://z-nasa-api.herokuapp.com/'
  });
});

/* GET apod page. */
router.get('/apod', function(req, res, next) {
  res.render('apod', {
    title: 'Astronomy Picture Of the Day',
    description: 'NASA API practice. Get APOD.',
    url: 'https://z-nasa-api.herokuapp.com/apod'
  });
});

/* GET asteroids page. */
router.get('/asteroids', function(req, res, next) {
  res.render('asteroids', {
    title: 'Nasa API Asteroids',
    description: 'NASA API practice. Get asteroids.',
    url: 'https://z-nasa-api.herokuapp.com/asteroids'
  });
});

/* POST to apod to get results */
router.post('/apod', function(req, res, next) {
  res.render('results', {
    title: 'Results',
    description: 'NASA API practice. APOD results',
    url: 'https://z-nasa-api.herokuapp.com/apod',
    form: req.body
  });
});

module.exports = router;
