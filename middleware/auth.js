var mySecretPassword = process.env.PASS || require ('../config.js').secretPassword;

function authorize (request, response, next){
  var secretPassword = request.headers.secret;
  if (!secretPassword || secretPassword !== 'its a secret'){
    response.status(403).json({
      msg:'You are not authorize'
    });
  } else {
    next();
  }
}

module.exports = authorize;
