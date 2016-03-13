/*var socket = io();*/

$("#play").click(function() { 
	var socket = io();
	var val = $('input[type=radio]:checked').val();
	/*socket.emit('message', 'hello world!');*/
	$('p').text("You played " + val );
	console.log("You played ")
	alert("You played "+ val );
});


