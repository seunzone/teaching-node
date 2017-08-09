//var http = require('http');
//var cat = require('cat-me');
//var knock = require('knock-knock-jokes');
//
//console.log(cat());
//console.log(knock());
//
////create a server object:
////http.createServer(function (req, res) {
////    res.writeHead(200, {'Content-Type': 'text/html'});
////    res.end('<h1>Hello World!</h1>');
////}).listen(3000);
//


//This Code Requires Express 'make sure you npm install express' 
const express = require('express');
const app = express();


//This Code Here directs to our default or homePage
app.get('/', function (req, res) {
  res.send('Hello World!');
})


//Creating More than Just the Default Route
app.get('/message', function (req, res) {
  res.send('Another One');
})

//Here We indicate the Port to be listened
app.listen(3000, function () {
  console.log('Our Site is on Port 3000');
})