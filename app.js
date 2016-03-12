var express = require('express');
var app = express();
app.use(express.static('public'));
var io = require('socket.io')(http);
var http = require('http').Server(app);
var port = 5000;

app.get('/:file', function(req, res){
	res.sendFile(__dirname + '/' + req.params.file);
});

io.on('connection', function(socket){
	console.log('a user connected');
});

http.listen(port, function() {
	console.log('listening on *: ' + port);
});
