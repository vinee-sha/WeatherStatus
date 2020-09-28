const request = require('request');

var getWeatherInfo = function(townvalue, callbackfunc) {
    var geolocation = townvalue.city
    const link = 'http://api.weatherstack.com/current?access_key=fa67f54dd601a0debcc1cf144ee3eb67&query=' + geolocation
    request({ url: link, json: true }, function(error, response) {
        const data = response.body
        callbackfunc(null, data.current.temperature)
    })
}
module.exports.getWeatherInfo = getWeatherInfo;