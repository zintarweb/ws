// LMED Web Service
// handler for login

express = require('express');
app = module.exports = express();

var cData = require('./login.m.js');
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

app.post('/login', function(req, res) {
	thisData.checkLogin(callback, res, req);
});

module.exports = app;
