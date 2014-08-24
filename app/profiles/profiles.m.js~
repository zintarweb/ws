// LMED WS
// Profile model

var mysql = require("mysql");
var conn = mysql.createConnection(DBoptions);

var mData = function(){
	all: ''
};

//==============================================
//model:
mData.prototype.updateProfile = function(cb, cb_arg, req) {
	self = this;
	var sql = "", pid=0;
	var params = req.body;
	
	console.log (params);
	
	data = {
		ProfileType: 1,
		CreationDate: '2014-04-01 13:00:00',
		LastModified: '2014-04-01 13:00:00',
		Title: params.name,
		Description: params.description
		}
	if (data.Title) {
		sql = 'select count(*) as num, profileid from tProfiles where title=? and description=? '
		conn.query(sql, [data.Title, data.Description], function(err, rows, fields) {
			if (err) throw err;
			self.all = rows;
console.log (rows[0].num);
			if (rows[0].num > 0)
				pid = rows[0].profileid;
		});
		sql = 'update tProfiles set ? where profileid = ?';
console.log(pid);
		if (pid == 0) 
			sql = 'insert into tProfiles set ? ';
console.log(sql);
			conn.query(sql, [data,pid], function(err, rows, fields) {
			if (err) throw err;
			self.all = rows;
		});
		sql = 'select profileid from tProfiles where title=? and description=? '
		conn.query(sql, [data.Title, data.Description], function(err, rows, fields) {
			if (err) throw err;
			self.all = rows;
		});
		cb(cb_arg);
		
	}
};

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

