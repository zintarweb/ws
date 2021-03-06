// LMED Web Service
// handler for registration requests 

express = require('express');
app = module.exports = express();

var cData = require('./register.m.js');
var thisData = new cData();
thisData.all = "init";

var callback = function(res) {
    var output = thisData.all;
    if (output == "init") return false;
    res.json(output);
    return true;
}

//==============================================
//controller:
app.post('/register', function(req, res){
	thisData.registerUser(callback, res, req);
});
app.get('/register', function(req, res){
	thisData.registerUser(callback, res, req);
});

app.get('/users/:id', function(req, res) {
	thisData.id = req.params.id;
	thisData.getByID(callback, res);
});

module.exports = app;
