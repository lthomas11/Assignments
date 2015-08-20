/**
 Leonard Thomas
 8/17/15
 SDI150817
 */
// my variables

var awesomePark  = "Epcot Center";
var isRaining    = false;
var todaysTemp   = 70;
var comfyTemp    = 80;


//input from user
alert("Let's go to " + awesomePark + " today!!!");//Informs user of situation

//my confirmations
comfyTemp = confirm("Is it greater or less than 80 degrees fahrenheit outside?  (Select Ok for yes and Cancel for no.)");//Requesting true/false response from user
isRaining   = confirm("Is it raining? (Select Ok for yes and Cancel for no.)");//Requesting true/false response from user

//my outputs
console.log("I would like to go to " + awesomePark + " today!!!");//Informs user of decision
console.log("It is currently " + comfyTemp + " degrees fahrenheit outside.");//


//Boolean conditional
if (isRaining !== true) {
} else {

    //code to run if "raining" is true
    console.log("It is " + isRaining + " that is is raining today.");
    if (todaysTemp < comfyTemp);
    console.log("Then, we will not go to " + awesomePark + " today...");
}

if (isRaining === false) {

    //code to run if "raining" is false
    console.log("It is " + isRaining + " that is is raining today.");
    if (todaysTemp > comfyTemp);
    console.log("Then, we'll go out and wear summer clothes to " + awesomePark + " today!!!");
}