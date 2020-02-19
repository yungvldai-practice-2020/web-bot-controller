import io from 'socket.io-client';

function socketConnect() {
  return io('http://localhost:8765');
}

export { socketConnect };