var utils = function() {};
var mysql = require("mysql");

utils.replaceClientOnDisconnect = function(client) {
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
    client = mysql.createConnection(client.config);
    utils.replaceClientOnDisconnect(client);
    client.connect(function (error) {
      if (error) {
console.log("error");
console.trace();
        // Well, we tried. The database has probably fallen over.
        // That's fairly fatal for most applications, so we might as
        // call it a day and go home.
        process.exit(1);
      }
    });
  });
}


module.exports = utils;

