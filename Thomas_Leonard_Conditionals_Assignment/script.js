/**
 Leonard Thomas
 8/17/15
 SDI150817
 */
// my variables

var awesomePark  = "Epcot Center";//Variable used to describe Epcot Center
var isRaining    = false;//Variable to determine weather status
var comfyTemp    = 70;//Variable used to set comfortable temp
var totalBudget  = 150;
var ticketMoney  = 100;
var discStudent  = ticketMoney * .15;


//info to user
alert("Let's go to " + awesomePark + " today!!!");//Informs user of situation
var userInput    = prompt("Please type in today's temperature.");//Variable used to request input from user
alert("You have a total budget of $" + totalBudget + " to buy your ticket and gifts.");//Informs user of situation
var spendingMoney  = prompt("Please type in how much is left after buying your ticket.  (Your ticket is $100.)");

//my confirmations
isRaining   = confirm("Is it raining? (Select Ok for yes and Cancel for no.)");//Requesting true/false response from user
discStudent = confirm("Do you have a student discount?  (Select Ok for yes and Cancel for no.)");//Requesting true/false response from user
spendingMoney = confirm("Do you have enough for souvenirs?  (Select Ok for yes and Cancel for no.)");
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

//Boolean conditional #3
(discStudent === true) ?
    console.log("Since you have a student discount, you save $15 on your ticket."):console.log("If you had a student discount, you could have saved $15 on your ticket.  Sign up with Full Sail University today!!!");

//Boolean conditional #4
if (spendingMoney === true){
    console.log("Let's get those Micky Mouse ears!!!");
}else{
    console.log("You have to save up for next time!!!");
}