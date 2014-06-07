var express = require('express');
var http = require('http');
var app = express();

var config = require('./config/initialize.js')

app.set('port', process.env.PORT || 1337);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});


app.configure(function(){
  app.use(express.bodyParser());
  app.use(app.router);
});

//=========================================================================
// CORS
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
 });


// Routes
app.get('/', function(req, res) {
	res.json('hello');
});

var now = require('./app/now/now.c.js');
app.use(now);

var users = require('./app/users/users.c.js');
app.use(users);
var profiles = require('./app/profiles/profiles.c.js');
app.use(profiles);
var register = require('./app/register/register.c.js');
app.use(register);
var login = require('./app/login/login.c.js');
app.use(login);



