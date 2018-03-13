var net = require('net');

var server = net.createServer(function (socket) {
  var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  var localISOTime = new Date(Date.now() - tzoffset).toISOString();
  var date = localISOTime.replace(/T/, ' ').replace(/:..\..+/, '') ;
  socket.end(date + '\n');
});
server.listen(process.argv[2]);
