var socket = io.connect();  

$("#play").click(function() { 
	var val = $('input[type=radio]:checked').val();
	/*socket.emit('message', 'hello world!');*/
	$('p').text("You played " + val );
	socket.emit('my other event', { my: val });
	/*var socket = io.connect();*/
	console.log("You played "+ val);
	/*alert("You played "+ val );*/
});

socket.on('this', function(msg){
    $('p').text(msg));
  });

