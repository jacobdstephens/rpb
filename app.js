var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(5000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/:file', function(req, res){
  res.sendFile(__dirname + '/' + req.params.file);
});

io.on('connection', function (socket) {
	console.log('blah');
	socket.on('player', function (id){
    	console.log(id);
		io.emit('player', id);
	});
		
  	socket.on('play', function (msg){
    	console.log(msg);
		io.emit('play', msg);
  	});
});

