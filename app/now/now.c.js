
express = require('express');
app = module.exports = express();

app.get('/now', function(request, response) {
	var d = new Date();
	//response.send(200, {date: d});
	response.json(d);
});




