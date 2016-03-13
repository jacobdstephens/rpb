var io = require('socket.io-client');

$("#play").click(function() { 
	var val = $('input[type=radio]:checked').val();
	/*socket.emit('message', 'hello world!');*/
	$('p').text("You played " + val );
	console.log("You played ")
	alert("You played "+ val );
});


