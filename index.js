var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/stylesheets/foundation.min.css', function (req, res){
	res.sendFile(__dirname + '/public/stylesheets/foundation.min.css');
});

app.get('/stylesheets/normalize.min.css', function (req, res){
	res.sendFile(__dirname + '/public/stylesheets/normalize.min.css');
});

app.get('/stylesheets/style.css', function (req, res){
	res.sendFile(__dirname + '/public/stylesheets/style.css');
});

app.get('/javascripts/modernizr.min.js', function (req, res){
	res.sendFile(__dirname + '/public/javascripts/modernizr.min.js');
});

app.get('/javascripts/jquery.min.js', function (req, res){
	res.sendFile(__dirname + '/public/javascripts/jquery.min.js');
});

app.get('/javascripts/foundation.min.js', function (req, res){
	res.sendFile(__dirname + '/public/javascripts/foundation.min.js');
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});
