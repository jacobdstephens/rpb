
  

$("#play").click(function() { 
	var socket = io.connect();
	var val = $('input[type=radio]:checked').val();
	/*socket.emit('message', 'hello world!');*/
	$('p').text("You played " + val );
	socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: val });
  });
	/*var socket = io.connect();*/
	console.log("You played "+ val);
	/*alert("You played "+ val );*/
});


