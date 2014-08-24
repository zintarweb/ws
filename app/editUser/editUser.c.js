// LMED Web Service
// handler for editUser requests 

express = require('express');
app = module.exports = express();

var cData = require('./editUser.m.js');
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
app.post('/editUser', function(req, res){
console.log(req.params.id);
	thisData.updateUser(callback, res, req, console);
});
app.get('/editUser', function(req, res){
console.log(req.params.userid);
	thisData.updateUser(callback, res, req, console);
});

app.get('/editUser/:id', function(req, res) {
console.log(req.params.id);
	thisData.id = req.params.id;
	thisData.getByID(callback, res);
});

app.get('/users/:id', function(req, res) {
	thisData.id = req.params.id;
	thisData.getByID(callback, res);
});

module.exports = app;
