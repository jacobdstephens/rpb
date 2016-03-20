socket = io.connect();
socket.emit('start_game');
console.log("starting game");

var _myid = 0;
var _playerCount = 0;

socket.on('playerID', function(id){
	$("#p_ID").text( "my playerID " + id);
	console.log("player ID: "+ id);
});

socket.on('playerCount', function(count){
	$("#p_Num").text( "Players: " + count);
	console.log("Player = "+ count);
});

$("#play").click(function() { 
	var val = $('input[type=radio]:checked').val();
	socket.emit('play', { id: p_ID , sign: val }) );
	console.log("You played "+ val);
	$("#my_play").text( "You played " + val);
});

socket.on('win', function(win){
	$("#win").text( win + "wins!");
});

