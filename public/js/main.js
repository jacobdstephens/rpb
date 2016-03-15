socket = io.connect();
  
socket.on('call', function(data){
	$('p').text(data);
});

$("#play").click(function() { 
	var val = $('input[type=radio]:checked').val();
	$('p').text("You played " + val );
	socket.emit('play', { my: val });
	console.log("You played "+ val);
	
});






