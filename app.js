var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(5000);

app.use(express.static(__dirname + '/public'));

/*app.get('/', function (req, res) {
	  res.sendFile('index',
		    { title : 'Home' }
		      )
}); 
*/

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


app.get('/', function(req, res){
  res.sendFile(__dirname + '/courtyard360.jpeg' );
});

/*
app.get('/assets/:file', function(req, res){
  res.sendFile(__dirname + '/assets/' + req.params.file);
});*/

gameEngine = require('rock-paper-spock');
instance = new gameEngine(gameEngine.DefaultRules);

playerCount = 0;
players = {};

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
  	socket.on('play', function (data)		{
		var p_ID = data.id;
		var msg = data.msg;	
		instance.addPlayer({id: p_ID, sign: msg });
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




