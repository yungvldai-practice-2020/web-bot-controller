function go(socket, direction) {
  socket.emit('go', direction);
}

function stop(socket) {
  socket.emit('stop', '');
}

function turn(socket, direction) {
  socket.emit('turn', direction);
}

export { go, stop, turn };