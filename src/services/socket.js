import io from 'socket.io-client';

function socketConnect() {
  return io('http://192.168.0.108:8765');
}

export { socketConnect };