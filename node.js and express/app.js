var app = require('express').createServer();
var fs = require('fs');
var index = fs.readFileSync('index.html');

app.get('/', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(index);
    //res.send('Hello from <a href="http://cloudancy.com">Cloudancy</a>');
});
app.listen(process.env.VCAP_APP_PORT || 3000);
