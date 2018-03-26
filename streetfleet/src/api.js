import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4000', {transports: ['websocket', 'polling', 'flashsocket']});



function subscribeToTimer (cb) {
  console.log("cd test", cb);
  socket.on('timer', data => cb(null, data));
  socket.emit('subscribeToTimer', 3000);
}

export { subscribeToTimer }