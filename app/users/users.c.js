
express = require('express');
app = module.exports = express();

var cData = require('./users.m.js');
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
app.get('/users', function(req, res){
	thisData.getAll(callback, res);
});

app.get('/users/:id', function(req, res) {
	thisData.id = req.params.id;
	thisData.getByID(callback, res);
});

module.exports = app;
