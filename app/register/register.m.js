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

mData.prototype.registerUser = function(cb, cb_arg, req) {
	self = this;
	var sql = "";
	var params = req.body;
	
	data = {
		UserType: 1,
		CreationDate: '1/1/1990',
		LastModified: '1/1/1990',
		Fname: 'test',
		Lname: 'test',
		Email : params.email,
		Login: params.email,
		Secret: params.secret,
		Phone: '123'
	}

	sql = 'insert into tUsers set ? '
	conn.query(sql, data, function(err, rows, fields) {
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
