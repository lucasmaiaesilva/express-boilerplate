var express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.status(200).send("Hello World");
});

app.get('*', function(req, res){
    res.status(404).send("Page not Found");
});

var port = Number(process.env.PORT || 3000);

app.listen(port);
console.log('Express server started on port ' + port);

