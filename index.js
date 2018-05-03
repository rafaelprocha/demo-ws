var express = require('express');

var app = express();

app.post(
	'/consulta-consumidor',
	function(req, res) {
		var responseXml = '<ROOT>'+
			'<LTT CCC="0" CPF="11111111111" SIT="NE" NOM="NÃO CADASTRADO" DNT="1900-01-01" />' + 
			'<DTH>0425130000</DTH>' + 
			'<RCD>N000</RCD>' + 
		    '<STM>00</STM>' + 
		    '<RNR>0</RNR>' + 
		    '<CST>0</CST>' +
		    '<ICC>N</ICC>' +
		'</ROOT>';
		res.status(200).send(responseXml).end();
});

app.listen(8080);
console.log('Express server started on port 8080');