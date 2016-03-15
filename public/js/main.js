socket = io.connect();
  
$("#play").click(function() { 
	var val = $('input[type=radio]:checked').val();
	$("#you").text("You played " + val );
	socket.emit('play', val );
	console.log("You played "+ val);
	
});

socket.on('play', function(msg){
	$("#them").text(msg);
});




