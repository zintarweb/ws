var express = require('express');
var http = require('http');
var app = express();

var config = require('./config/initialize.js')

app.set('port', process.env.PORT || 1337);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

//=========================================================================
// CORS
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
 });

app.configure(function(){
  app.use(express.bodyParser());
  app.use(app.router);
});



// Routes
app.get('/', function(req, res) {
	res.json('hello');
});

var now = require('./app/now/now.c.js');
app.use(now);

var editUser = require('./app/editUser/editUser.c.js');
app.use(editUser);

var users = require('./app/users/users.c.js');
app.use(users);
var profiles = require('./app/profiles/profiles.c.js');
app.use(profiles);
var register = require('./app/register/register.c.js');
app.use(register);
var login = require('./app/login/login.c.js');
app.use(login);
var upload = require('./app/upload/upload.c.js');
app.use(upload);




