

$("#play").click(function() { 
	var val = $('input[type=radio]:checked').val();
	/*socket.emit('message', 'hello world!');*/
	$('p').text("You played " + val );
	var io = require('socket.io-client');
	console.log("You played ")
	alert("You played "+ val );
});


