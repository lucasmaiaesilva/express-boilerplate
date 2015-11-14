var express = require('express'),
    app = express(),
    ptBible = require('bible-portuguese');

app.get('/', function(req, res){
    res.status(200).json("Página Inicial");
});

app.get('/:book/:chapter/:verse', function(req, res){
	var query = req.params.book + " " + req.params.chapter + ":" + req.params.verse;
	ptBible.getVerse(query, function(err, data){
		if (err) throw err;
		res.status(200).json(data);
	});

});

app.get('*', function(req, res){
    res.status(404).send("<h1>Page not Found</h1>");
});

var port = Number(process.env.PORT || 3000);

app.listen(port);
console.log('Express server started on port ' + port);

