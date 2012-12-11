var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/html'});
  //res.end('Hello from <a href="http://cloudancy.com/es">Cloudancy</a>');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
}).listen(process.env.VMC_APP_PORT || 1337, null);
