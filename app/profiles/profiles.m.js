var mysql = require("mysql");
var conn = mysql.createConnection(DBoptions);

var mData = function(){
	all: ''
};

//==============================================
//model:

mData.prototype.getAll = function(cb, cb_arg) {
	self = this;
	conn.query('SELECT * from tProfiles', function(err, rows, fields) {
		if (err) throw err;
		self.all = rows;
		cb(cb_arg);
	});
};

mData.prototype.getByID = function(cb, cb_arg) {
	self = this;
	conn.query('SELECT * from tProfiles where ProfileID = ' + self.id, function(err, rows, fields) {
		if (err) throw err;
		self.all = rows;
		cb(cb_arg);
	});
};

module.exports = mData;

