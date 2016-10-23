var express = require('express');
var router = express.Router();
var authorize = require('../middleware/auth.js');
var apiKey = process.env.APIKEY || require ('../config.js').apiKey;
var axios = require('axios');
var timeoutCongfig = {
  timeout: 2000
};

router.use(authorize);

router.get('/forecast/:latitude,:longitude', function(request, response){
  var url = buildForecastUrl (request.params.latitude, request.params.longitude);
  axios.get(url, timeoutCongfig)
    .then(function(forcast){
      response.send(forcast.data);
    })
    .catch(function(error){
      response.send(error);
    });
});

module.exports = router;

function buildForecastUrl (latitude, longitude){
  var url = 'https://api.darksky.net/forecast/'+ apiKey +'/'+ latitude +','+ longitude;
  return url;
}
