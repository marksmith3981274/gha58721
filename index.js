
const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('.. ..2 777 [0.0.7] !!!!! ..');
  res.end();
}).listen(8080);
