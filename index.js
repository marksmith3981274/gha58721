
const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('.. ..2 HERE WE GO = [0.0.3] !!!!! ..');
  res.end();
}).listen(8080);
