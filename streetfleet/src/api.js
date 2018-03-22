import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4000', {transports: ['websocket', 'polling', 'flashsocket']});



function subscribeToTimer (cb) {
  console.log("cd test", cb);
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

export { subscribeToTimer }