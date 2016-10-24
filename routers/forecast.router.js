var express = require('express');
var router = express.Router();
var apiKey = process.env.APIKEY || require('../config.js').apiKey;
var axios = require('axios');
var authorize = require('../middleware/auth.js');
var timeoutConfig = {
  timeout:2000
};

router.use(authorize);

router.get('/forecast/:latititude,:longitude', function(request, reponse){
  var ur = buildForecastURL(request.params.latititude, request.params.longitude);
  axois.get(url, timeoutCongfig)
    .then(function(forecast){
      response.send(forecast.data);
    })
    .catch(function(error){
    response.send(error);
  });
});

module.exports = router;

function buildForecastURL (latitude, longitude){
  var url = 'https://api.darksky.net/forecast/'+ apiKey +'/'+ latititude +','+ longitiude;
  return url;
}
