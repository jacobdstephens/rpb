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

var gameEngine = require('rock-paper-spock');
var instance = new gameEngine(gameEngine.DefaultRules);

var playerCount = 0;
var players = {};

io.on('connection', function (socket) {
		
	socket.on('start_game', function (){
		playerCount++;
		players[socket.id] = true;
		/* Use Join Rooms feature ? */
		io.to(socket.id).emit('playerID ', socket.id);
		socket.emit('playerID', socket.id);
		console.log('playerID = ' + socket.id);
		io.emit('playerCount', playerCount);
		console.log('playerCount ' + playerCount);
	});
		/* */
  	socket.on('my_play', function (msg){
		instance.addPlayer({id: playerCount, sign: msg });
    	console.log(socket.id + " played " + msg);
		/* run rps */
		if ( playerCount > 1 ) {
			instance.play();
console.log(instance.winner);
			io.emit('win', socket.id + " Win! " + instance.winner);
		}
		
  	});

	socket.on('disconnect', function(){
		if (players[socket.id]) {
      		playerCount--;
      		delete players[socket.id];
      		console.log('disconnected: ' + socket.id + ' count ' + playerCount);
      		io.emit('player left', socket.id);
      		io.emit('player count', playerCount);
    	}
  	});

});



/*
instance.addPlayer({id: 1, sign: "spock"});
instance.addPlayer({id: 2, sign: "rock"});
instance.addPlayer({id: 3, sign: "spock"});
instance.addPlayer(4, "rock").addPlayer(5, "paper");
instance.play();
console.log(instance.winner);
*/




