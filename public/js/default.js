/*
var initGame = function () {
    var cfg = {
        draggable: true,
        position: 'start',
        onDrop: handleMove,
    };
 
    board = new ChessBoard('gameBoard', cfg);
    game = new Chess();
}
 
var handleMove = function(source, target) {
    var move = game.move({from: source, to: target});
}*/


// setup my socket client
var socket = io();
msgButton.onclick = function(e) {
    // someone clicked send a message
    socket.emit('message', 'hello world!');
}

// called when a player makes a move on the board UI
var handleMove = function(source, target) {
    var move = game.move({from: source, to: target});
    socket.emit('move', move);
}

// called when the server calls socket.broadcast('move')
socket.on('move', function (msg) {
    game.move(msg);
    board.position(game.fen()); // fen is the board layout
});