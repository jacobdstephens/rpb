var socket = io.connect();
  
socket.on('this', function(msg){
	$('p').text(msg));
	$("#play").click(function() { 
		var val = $('input[type=radio]:checked').val();
		$('p').text("You played " + val );
		socket.emit('my other event', { my: val });
		console.log("You played "+ val);
	
	});
});





