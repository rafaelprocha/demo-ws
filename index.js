var express = require('express');

var app = express();

app.get('/teste', function(req, res) {
	res.status(200).send("teste").end();
});

app.listen(8080);
console.log('Express server started on port 8080');