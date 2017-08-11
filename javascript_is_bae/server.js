var express = require('express')
var app = express()
var path = require('path')
var mysql = require('mysql');

app.get('/', function(req, res){
	//console.log('req:', req)
	res.send("<div>Welcome to the javascript is bae meetup</div>")
})

app.use('/shout', express.static('index.html'))
app.listen(4000, function(){
	console.log("running on port 4000")
})

// Try to connect to mysql
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
//REST - REPRESENTATIONAL STATE TRANSFER