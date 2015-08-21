/**
 Leonard Thomas
 8/17/15
 SDI150817
 */
// my variables

var awesomePark  = "Epcot Center";//Variable used to describe Epcot Center
var isRaining    = false;//Variable to determine weather status
var comfyTemp    = 70;//Variable used to set comfortable temp
var userInput    = prompt("Please type in today's temperature.");//Variable used to request input from user

//input from user
alert("Let's go to " + awesomePark + " today!!!");//Informs user of situation

//my confirmations
//Requesting true/false response from user
isRaining   = confirm("Is it raining? (Select Ok for yes and Cancel for no.)");//Requesting true/false response from user

//my outputs
console.log("I would like to go to " + awesomePark + " today!!!");//Informs user of decision
console.log("It is currently " + userInput + " degrees fahrenheit outside.");//Informs user of decision
//Boolean conditional #1
if (comfyTemp >= userInput){
    console.log("Let's bring a jacket to " + awesomePark + ".");//Decision path #1 for solution
}else{
    console.log("We should wear summer clothing to " + awesomePark + " today!!!");//Decision path #2 for solution
}

//Boolean conditional #2
if (isRaining === true) {

    //code to run if "raining" is true
    console.log("It is " + isRaining + " that is is raining today.");//Information for user to receive
    console.log("Then, we will not go to " + awesomePark + " today...");//Decision path #3 for solution
}else{

    //code to run if "raining" is false
    console.log("It is " + isRaining + " that is is raining today.");//Information for user to receive
    console.log("Then we should go to " + awesomePark + " today!!!");//Decision path #4 for solution
}