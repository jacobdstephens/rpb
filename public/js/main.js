$("#play").click(function() { var val = $('input[type=radio]:checked').val();
$('p').text("You played " + val );
});

// setup my socket client
var socket = io();
msgButton.onclick = function(e) {
    // someone clicked send a message
    socket.emit('message', 'hello world!');
}