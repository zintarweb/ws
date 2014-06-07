var mysql = require("mysql");
var conn = mysql.createConnection(DBoptions);

var mData = function(){
	all: ''
};

//==============================================
//model:

mData.prototype.checkLogin = function(cb, cb_arg, req) {
	self = this;
	console.log(req.params);
	
	var data = {
		Email: req.body.email
	}
	console.log (data);
	conn.query('SELECT * from tUsers where ? ', data , function(err, rows, fields) {
		if (err) throw err;
		self.all = rows;
		cb(cb_arg);
	});
};

module.exports = mData;


