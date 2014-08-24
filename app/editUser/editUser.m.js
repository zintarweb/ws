var mysql = require("mysql");
var conn = mysql.createPool(DBoptions);

var mData = function(){
	all: ''
};

//==============================================
//model:

mData.prototype.mtest = function() {
	self = this;
};

mData.prototype.updateUser = function(cb, cb_arg, req, console) {
	self = this;
	var sql = "";
	var params = req.body;
	var exists;
	var userid = params.userid; 

console.log (req.body);
console.log (userid > 0);

	data = {
		UserType: 1,
		CreationDate: '2014-04-01 13:00:00',
		LastModified: '2014-04-01 13:00:00',
		Fname: params.fname,
		Lname: params.lname,
		Email : params.email,
		Login: params.email,
		Secret: params.secret,
		Phone: params.phone
	}
	if (userid > 0) {
		sql = 'select UserID from tUsers where Email = ? '	
		conn.query(sql, params.email, function(err, rows, fields) {
			if (err) throw err;
			if (rows) {
				exists = true;
			};
		});
	} else {
		self.all = data;
		cb(cb_arg);
	}
	if (exists) {
console.log ("here");
			sql = 'update tUsers set ? where UserID = ?'
			console.log (sql);
			conn.query(sql, data, userid, function(err, rows, fields) {
				if (err) throw err;
				self.all = rows;
				cb(cb_arg);
			})
	}
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

