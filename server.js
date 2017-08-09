var http = require('http');
var cat = require('cat-me');
var knock = require('knock-knock-jokes');

console.log(cat());
console.log(knock());

//create a server object:
//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end('<h1>Hello World!</h1>');
//}).listen(3000);

