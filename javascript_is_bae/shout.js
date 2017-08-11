	
var express = require("express")
var username = document.getElementById("username")
var passsword = document.getElementById("password");
var button = document.getElementById("submit_button");

var clickHandler = function(e){
	alert("Welcome " + username.value)
}

button.addEventListener('click', clickHandler)

console.log('express', express)

var daysOfWeek = (function(){
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	return function(index){
	
	 console.log(days[index])
	}
}())
// daysOfWeek(4)