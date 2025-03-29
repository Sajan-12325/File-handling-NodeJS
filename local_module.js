var http = require('http');

var app = require('./file_render.js');

http.createServer(app.handleRequest).listen(8000);


// we are calling file_render file using handleRequest Function her


/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8010);

console.log("Heey Sajan"); */
