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

var playerCount = 0;
var players = {};

io.on('connection', function (socket) {
	
	/*players[socket.id] = true;*/
		
	
		console.log('player connected' + socket.id);
	socket.on('start_game', function (){
		playerCount++;
		/* Use Join Rooms feature ? */
		io.to(socket.id).emit('playerID ', socket.id);
		
		console.log('playerID = ' + socket:id);
		io.emit('playerCount', playerCount);
		console.log('playerCount ' + playerCount);
		});
		/* */
  	socket.on('my_play', function (msg){
    	console.log(socket.id + " played " + msg);
		/* run rps */
		io.emit('win', socket.id + " played " + msg);
  	});
});

