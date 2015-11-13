var express = require('express'),
    app = express(),
    ptBible = require('bible-portuguese');

app.get('/', function(req, res){
    // res.status(200).send("<h1>Hello World</h1>");
    ptBible.getVerse("Mateus 1:1", function(err, data){
    	if (err) throw err;
    	console.log(data);
    });
});

app.get('*', function(req, res){
    res.status(404).send("<h1>Page not Found</h1>");
});

var port = Number(process.env.PORT || 3000);

app.listen(port);
console.log('Express server started on port ' + port);

