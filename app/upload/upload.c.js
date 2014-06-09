// LMED Web Service
// upload controller

express = require('express');
app = module.exports = express();

var cData = require('./upload.m.js');
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
app.post('/upload', function(req, res){
	thisData.uploadMedia(callback, res, req);
});


module.exports = app;
