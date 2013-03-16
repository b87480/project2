//alert("JavaScript works!");
/* Joshua Whitney
Scalable Data Infrastructures
1303
Project 2
*/


//Global Variables

var startTheday = new Date().getHours();
var morningWorkout = "Trail walk.";
var nightWorkout = "Weight Lifting.";
var dailySupplements = ["Pills", "Protein Shakes", "Energy Drinks", "Greens"];
var weightLiftPounds= 0;
var trailWalkTime = 130;
var cheatDay = true;

//End Global variables



//Start Functions

//Procedure

var myProcedure = function(name) {
	if (name == "Josh") {
		return("Hey" + " " + name);
	} else { return("You are not the person I am looking for!"); }
	return;
};

//Boolean Function

var shoudIcheat = function() {
	var yes = "I am going to have a cheat day!",
		no = "Nope! I'm gonna be strong today!";
			if (cheatDay == true && startTheday < 10) { return(yes); }
			else if (cheatDay == false) { return(no); }
			else { return "I haven't made up my mind yet."; }
			return(cheatDay);
};

//Number Function

var howMuch = function() {
	while(weightLiftPounds < 300) {
		weightLiftPounds += 45;
		console.log("Today I lifted" + " " + weightLiftPounds + " " + "pounds!");
	}
	return("I maxed out my benchpress at" + " " + weightLiftPounds + " " + "pounds!");
};

//String Function

var whatWorkout = function() {
	var day = "I can go for a walk this morning";
	var night = "I can lift weights tonight";
		if (startTheday > 09 && startTheday < 10) { return (day + " " + "and" + " " + night); }
		else if (startTheday == 08) {return (day); }
		else {return (night);}
		return;
};

//Array Function

var proteinShakes = function(){
	for (var i = 0; i < dailySupplements.length; i++) {
		console.log("Everyday I have to take" + " " + dailySupplements[i]);
	}
	return(dailySupplements);
};

//Time Function

var workoutTimes = function() {
	var timeofday;
		if (startTheday <= 08) {timeofDay = morningWorkout; }
		else if (startTheday == 09) {timeofDay = "It's getting late!"; }
		else {timeofDay = morningWorkout; }
		return(timeofDay);
};

console.log(myProcedure("Josh")); //Procedure
console.log(shoudIcheat()); //Boolean Function
console.log(howMuch()); // Number Function
console.log(whatWorkout()); //String Function
console.log(proteinShakes()); //Array Function 
console.log(workoutTimes()); //Time Function
