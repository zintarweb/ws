var mysql = require("mysql");
var conn = mysql.createConnection(DBoptions);

var mData = function(){
	all: ''
};

//==============================================
//model:

mData.prototype.mtest = function() {
	self = this;
};

mData.prototype.uploadMedia = function(cb, cb_arg, req) {
	self = this;
	var sql = "";
	var params = req.body;
	
	data = {
		UserType: 1,
		CreationDate: '2014-04-01 13:00:00',
		LastModified: '2014-04-01 13:00:00',
		Fname: 'test',
		Lname: 'test',
		Email : params.email,
		Login: params.email,
		Secret: params.secret,
		Phone: '123'
	}

	sql = 'insert into tMedia set ? '
	conn.query(sql, data, function(err, rows, fields) {
		if (err) throw err;
		self.all = rows;
		cb(cb_arg);
	});
};


module.exports = mData;

