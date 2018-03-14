var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  if(req.method === 'GET'){
    var urlParsed = url.parse(req.url, true);
    var date = new Date(urlParsed.query.iso);
    if(urlParsed.pathname === '/api/parsetime'){
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        'hour': date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()})
      );
    }else if(urlParsed.pathname === '/api/unixtime'){
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ 'unixtime': date.getTime() }));
    }
  }

 });
server.listen(process.argv[2]);
