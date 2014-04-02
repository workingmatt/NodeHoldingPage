var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var jade = require('jade');


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {layout:false});

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
});

//server listens on port 2014. Port 80 is the usual www port
server.listen(2014);

app.get('/', function(req, res){
  res.render('hold.jade');
});
