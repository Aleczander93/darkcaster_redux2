var express = require('express');
var server = express();
var cors = require('cors');
var forecastRouter = require('./routers/forecast.router.js');
var indexRouter = require('./routers/index.router.js');
var logger = require('./middleware/logger.js');
var authorize = require('./middleware/auth.js');

//this is an address were using to place into heroku
var port = process.env.PORT || 8080;
//telling server to access page through this door
server.use(express.static(__dirname + '/public'));
//telling server to access these files within our server
server.use(logger);
server.use(cors());
server.use(indexRouter);
server.use(forecastRouter);
//listen in to door 8080 and have page tell us what we hear
server.listen(port, function(){
  console.log('now listening on port...', port);
});
