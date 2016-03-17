socket = io.connect();

var _myid = 0;
var _playerCount = 0;

socket().on('playerID', function(id){
	$("#myPlayerID").text( "myPlayerID " + id);
});

socket().on('playerCount', function(count){
	$("#Players").text( "Players: " + count);
});

$("#play").click(function() { 
	var val = $('input[type=radio]:checked').val();
	socket.emit('play', val );
	console.log("You played "+ val);
	$("#play").text( "You played " + val);
});

socket.on('win', function(win){
	$("#win").text( win + "wins!");
});

