// Demostrate the following points
// Object and Arrays
// functions
// dot notation vs bracket notation
// definitaion of scope & lexical scope
// IIFE patterns
// Hoisting
// Closure
// Prototype
// Callbacks
// Promises

"use strict"

var myObject = {};
myObject.username = "boris.toupikov";
myObject.tagline = "Привет мир";

var myOtherObject = {
	username: "otis.duncan",
	tagline: "Gday world"
};

var MyObjectCreator = function(username, tagline){
	return{
		username: username,
		tagline : tagline
	}
}

var myObjects = [];
myObjects.push(new MyObjectCreator("mark.williams", "Hello World"));
myObjects.push(new MyObjectCreator("pietro.carta", "Ciao mondo"));
myObjects.push(new MyObjectCreator("boris.toupikov", "Привет мир"));
myObjects.push(new MyObjectCreator("otis.duncan", "Gday world"));

//looping array
var loopingArray = function(){
	for (var i = 0; i < myObjects.length; i++) {
		console.log(myObjects[i].username + " says " + 
			myObjects[i].tagline);
	};
}

//looping object
var loopingObject = function(){
	for(var prop in myOtherObject)
	{
		console.log(prop + " is " + myOtherObject[prop]);
	}
}


///////////////////////////////////////////////

// scope & Closure
var addName = function(firstName)
{
	var dot = ".";
	var lastName = function(lastName)
	{
		return firstName + dot + lastName;
	}
	return lastName;
}

var patrick = addName("patrick");
var fullName = patrick("norton");
myObjects.push(new MyObjectCreator(fullName, "Hello my world"));


//module pattern, scope, closure
var Users = function(){
	var users = [];

	var add = function(firstName, lastName, tagline){
		var name = addName(firstName);			
		users.push(new MyObjectCreator(name(lastName), tagline))			
	}

	return{
		addUser: function(firstName, lastName, tagline){
			add(firstName,lastName,tagline);					
		},
		viewUsers: function(){
			return users;
		},
		deleteUsers: function(user){
			users = [];
		}
	}
}

var sterlingUsers = createUsers();
var portalUsers = createUsers();

sterlingUsers.addUser("daniel", "zienki", "Witaj świecie");
sterlingUsers.addUser("mark", "williams", "Hello Sterling World");

portalUsers.addUser("daniel", "zienki", "Witaj świecie");
portalUsers.addUser("mark","williams", "Hello portal World");


//////////////////////////////////////////
// IIFE patterns (Immediately Invoked Function Expression)
(function(user){
	setTimeout(function(){
		console.log("good morning " + user);
	}, 1000)
})("me.williams");


/////////////////////////////////////////////////
// Callbacks
//var callbackDemo = function()

//async