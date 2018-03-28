import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4000', {transports: ['websocket', 'polling', 'flashsocket']});

// import io from 'socket.io-client';
// const socket = io('http://localhost:4000');


function subscribeToTimer (cb) {
  socket.on('position', (data) => cb(data));
  socket.emit('fleet_id', 'HELLO SUCKET');
}

export default subscribeToTimer;