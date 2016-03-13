var socket = io.connect();
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });

$("#play").click(function() { 
	var val = $('input[type=radio]:checked').val();
	/*socket.emit('message', 'hello world!');*/
	$('p').text("You played " + val );
	/*var socket = io.connect();*/
	console.log("You played ");
	/*alert("You played "+ val );*/
});


