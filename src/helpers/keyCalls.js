import { stop, go, turn } from '@/services/mech';

export default [
  {
    key: 'ArrowUp',
    onPush: (socket) => {
      go(socket, 'forward');
    },
    onPull: (socket) => {
      stop(socket);
    },
    id: 'up'
  },
  {
    key: 'ArrowRight',
    onPush: (socket) => {
      turn(socket, 'right');
    },
    onPull: (socket) => {
      stop(socket);
    },
    id: 'right'
  },
  {
    key: 'ArrowLeft',
    onPush: (socket) => {
      turn(socket, 'left');
    },
    onPull: (socket) => {
      stop(socket);
    },
    id: 'left'
  },
  {
    key: 'ArrowDown',
    onPush: (socket) => {
      go(socket, 'rearward');
    },
    onPull: (socket) => {
      stop(socket);
    },
    id: 'down'
  }
];