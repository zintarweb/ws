var mysql = require("mysql");
var conn = mysql.createConnection(DBoptions);

var utils = require("../utils/utils.js");
utils.replaceClientOnDisconnect(conn);

var mData = function(){
	all: ''
};

var nullRecords = {
	exists: '0',
	Email: '',
	UserID: '',
	Fname: '',
	Lname: ''
}
//==============================================
//model:

mData.prototype.checkLoginTest = function(cb, cb_arg, req) {
	self = this;
	
	var data = {
		Email: req.body.email
	}
	conn.query('SELECT * from tUsers ', data , function(err, rows, fields) {
		if (err) throw err;
		self.all = rows;
		cb(cb_arg);
	});
};

mData.prototype.checkLogin = function(cb, cb_arg, req) {
	self = this;
	
	var data = {
		Email: req.body.email,
		Secret: req.body.secret
	}
	var sql = 'SELECT "1" as "exists", UUID() as id, UserID as userid, UserType as role, Fname, Lname, Email from tUsers where Email = ? and Secret = ? ';
	var params = [data.Email,data.Secret];
	sql = mysql.format(sql, params);
	conn.query(sql, function(err, rows, fields) {
		if (err) {
			throw err;
		}
		if (rows[0]) {
			self.all = rows;
		} else
			self.all = nullRecords;
		cb(cb_arg);
	});

};

module.exports = mData;


