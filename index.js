var express = require('express');
var server = express();
var cors = require('cors');
var authorize = require ('./middleware/auth.js');
var logger = require ('./middleware/logger.js');
var forecastRouter = require ('./routers/forecast.router.js');
var indexRouter = require ('./routers/index.router.js');

var port = process.env.PORT || 8080;
server.use(express.static(__dirname + "/public"));

server.use(cors());
server.use(logger);
server.use(indexRouter);
server.use(forecastRouter);

server.listen( port, function(){
  console.log('...now listening on port 8080');
});
