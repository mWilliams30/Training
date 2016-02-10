//Use this file to implement Part One of your project
/*var noiseArray = ["quack"];
noiseArray.unshift("honk")
noiseArray.push("sneeze");
noiseArray[noiseArray.length] = "meow"

var animal = {};
animal.username = "DaffyDuck";
animal.tagline = 'Yipeee';
animal.noises = noiseArray;*/

/*
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

addFriend(cow, sheep);
addFriend(cow, dog);
addFriend(sheep, dog);
addFriend(sheep, cow);
addFriend(dog, cow);
addFriend(dog, sheep);



var myFarm = [];
myFarm.push(cow, sheep, dog)

var addMacthesArray = function(farm){
	for(var i = 0; i < farm.length; i++)
	{
		farm[i].matches = [];
	}
}

var giveMatches = function(farm){
	for(var i = 0; i < farm.length; i++)
	{
		farm[i].matches.push(farm[i].freinds[i]);
	}
}*/

//closure
var nonsense = function(string){
	var blab = function(){
	  alert(string);
	};
	return blab;
}

var lastNameTrier = function(firstName){
   var firstName = firstName;

    var innerFunction = function(lastName) { 
        var lastName = lastName;
        console.log(firstName + " " + lastName)
    };
    return innerFunction;
};
var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brown'); //logs 'Farmer Brown' 


var storyWriter = function(){
	var story = "";	
	return{
		addWords: function(words){
			story = story + words
			return story;
		},
		erase: function(){
			story = "";
		}
	};
}


var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

//var storyOfMyLife = storyWriter();
//storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
//storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
//storyOfMyLife.erase(); // ''












