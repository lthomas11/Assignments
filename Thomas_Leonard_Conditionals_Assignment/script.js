/**
 Leonard Thomas
 8/17/15
 SDI150817
 */
// my variables

var awesomePark  = "Epcot Center";
var isRaining    = false;
var todaysTemp   = 85;
var comfyTemp    = 75;


//input from user
alert("Let's go to " + awesomePark + " today!!!");//Informs user of situation

//my confirmations
comfyTemp = confirm("Is it greater or less than 75 degrees fahrenheit outside?  (Select Ok for yes and Cancel for no.)");//Requesting true/false response from user
isRaining   = confirm("Is it raining? (Select Ok for yes and Cancel for no.)");//Requesting true/false response from user

//my outputs
console.log("I would like to go to " + awesomePark + " today!!!");//Informs user of decision
console.log("It is currently " + todaysTemp + " degrees fahrenheit outside.");//


//Boolean conditional
if (isRaining === true) {

    //code to run if "raining" is true
    console.log("It is " + isRaining + " that is is raining today.");
    console.log("Then, we will not go to " + awesomePark + " today...");
}else{

    //code to run if "raining" is false
    console.log("It is " + isRaining + " that is is raining today.");
}

if (comfyTemp >= todaysTemp){
    console.log("Let's bring a jacket to " + awesomePark + ".");
}