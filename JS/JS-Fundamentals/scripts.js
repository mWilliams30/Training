//Use this file to implement Part One of your project
/*var noiseArray = ["quack"];
noiseArray.unshift("honk")
noiseArray.push("sneeze");
noiseArray[noiseArray.length] = "meow"

var animal = {};
animal.username = "DaffyDuck";
animal.tagline = 'Yipeee';
animal.noises = noiseArray;*/

var AnimalTestUser = function(username){
	var object = {}
	object.username = username;	
	if(arguments.length > 1)		
		object.otherArgs = Array.prototype.slice.call(arguments, 0)
	return object;
}


var AnimalCreator = function(username, species, tagline, noises){
	return{
		username: username,
		species: species,
		tagline: tagline,
		noises: noises,
		freinds: []
	}
}

var addFriend = function(animal, animalFriend){
	animal.freinds.push(animalFriend.username);
}

var cow = AnimalCreator("Mark", "Lion", "Code to  hell and back", ["zzzzzz", "Oh Yer"])
var sheep = AnimalCreator("Jo", "Fish", "Clean Up", ["Im Tired", "Im Horney"])
var dog = AnimalCreator("Emilio", "Dinosaur", "Dadaaaa", ["No No No", "Bear Bear"])

var myFarm = [];
myFarm.push(cow, sheep, dog)