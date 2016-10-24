var express= require('express');
var router = express.Router();
var path = require('path');

//using this door send index.html file follow this path to find what we need
router.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root: path.resolve('./')});
});

//tell all files that they can use the index.router.js
module.exports = router;
