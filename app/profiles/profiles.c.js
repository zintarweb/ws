// LMED WS
// profile controller

express = require('express');
app = module.exports = express();

var cData = require('./profiles.m.js');
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
app.post('/profile', function(req, res){
	thisData.updateProfile(callback, res, req);
});

app.get('/profiles', function(req, res){
	thisData.getAll(callback, res);
});

app.get('/profiles/:id', function(req, res) {
	thisData.id = req.params.id;
	thisData.getByID(callback, res);
});

module.exports = app;
