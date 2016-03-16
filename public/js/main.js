socket = io.connect();

  

socket.on('your id', function(id){
	$("#them").text( "player id " + id);
});

$("#play").click(function() { 
	var val = $('input[type=radio]:checked').val();
	socket.emit('play', val );
	console.log("You played "+ val);
	
});

socket.on('play', function(msg){
	$("#you").text( "You played " + msg);
});





