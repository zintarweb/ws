var mysql = require("mysql");
var conn = mysql.createPool(DBoptions);

var mData = function(){
	all: ''
};

function replaceClientOnDisconnect(client) {
  client.on("error", function (err) {
    if (!err.fatal) {
      return;
    }
 
    if (err.code !== "PROTOCOL_CONNECTION_LOST") {
      throw err;
    }
 
    // client.config is actually a ConnectionConfig instance, not the original
    // configuration. For most situations this is fine, but if you are doing 
    // something more advanced with your connection configuration, then 
    // you should check carefully as to whether this is actually going to do
    // what you think it should do.
    client = mysql.createPool(client.config);
    replaceClientOnDisconnect(client);
    connection.connect(function (error) {
      if (error) {
        // Well, we tried. The database has probably fallen over.
        // That's fairly fatal for most applications, so we might as
        // call it a day and go home.
        process.exit(1);
      }
    });
  });
}
 
// And run this on every connection as soon as it is created.
replaceClientOnDisconnect(conn);


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

