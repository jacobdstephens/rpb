var express = require('express');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app);
var port = 5000;
 
http.listen(port, function() {
    console.log('listening on *: ' + port);
});

app.get('/:file', function(req, res){
  res.sendFile(__dirname + '/' + req.params.file);
});

// setup my socket server
var io = require('socket.io')(http);
 
io.on('connection', function(socket) {
    console.log('New connection');
 
    socket.on('message', function(msg) {
        console.log('Got message from client: ' + msg);
    }
}

// Called when the client calls socket.emit('move')
socket.on('move', function(msg) {
    socket.broadcast.emit('move', msg);
});


