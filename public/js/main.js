

$("#play").click(function() { 
	var val = $('input[type=radio]:checked').val();
	/*socket.emit('message', 'hello world!');*/
	$('p').text("You played " + val );
	/*var socket = io.connect();*/
	console.log("You played ")
	alert("You played "+ val );
});


