var mysql = require("mysql");
var conn = mysql.createPool(DBoptions);
 
var utils = require("../utils/utils.js");
utils.replaceClientOnDisconnect(conn);

var mData = function(){
	all: ''
};


//==============================================
//model:

mData.prototype.mtest = function() {
	self = this;
};

mData.prototype.getAll = function(cb, cb_arg) {
	self = this;
	conn.query('SELECT * from tUsers', function(err, rows, fields) {
		if (err) throw err;
		self.all = rows;
		cb(cb_arg);
	});

};

mData.prototype.getByID = function(cb, cb_arg) {
	self = this;
	conn.query('SELECT * from tUsers where UserID = ' + self.id, function(err, rows, fields) {
		if (err) throw err;
		self.all = rows;
		cb(cb_arg);
	});
};

module.exports = mData;

