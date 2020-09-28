var express = require('express');
var path = require('path');
var weatherinfobygeo = require('../utils/weatherinfobygeo.js')
var weatherinfobycity = require('../utils/weatherinfobycity.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('weatherstatus')
});

router.get('/weatherstatus', function(req, res, next) {
    res.render('weatherstatus')
});

router.get('/getweatherbygeo', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public', 'weatherAppFormbygeo.html'));
});

router.get('/getweatherbycity', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public', 'weatherAppFormbycity.html'));
});

router.post('/showweatherstatusbygeo', function(req, res, next) {
    var latitude = req.body.latitude
    var longitude = req.body.longitude
    var geoloc = { latitude: latitude, longitude: longitude }
    weatherinfobygeo.getWeatherInfo(geoloc, function(error, data) {
        if (error) {
            console.log(error)
        } else {
            geoloc.temperature = data
            res.render('weatherstatusbygeo', geoloc)
        }
    })
});

router.post('/showweatherstatusbycity', function(req, res, next) {
    var geolocation = { city: req.body.city }
    weatherinfobycity.getWeatherInfo(geolocation, function(error, data) {
        if (error) {
            console.log(error)
        } else {
            geolocation.temperature = data
            res.render('weatherstatusbycity', geolocation)
        }
    })
});

module.exports = router;