/*
 Leonard Thomas
 SDI 150813
 Expressions_Assignment
 */
//TODO create variables
//var sectionOne = $45
//var sectionTwo = $30
//var sectionThree = $15
//var userInput1 = prompt text
//var localArea = $2
//var countryArea = $5
//var intlArea = $11
//var userInput2 = prompt text
//var firstName = prompt text
//var lastName = prompt text
//var userInput3 = firstName
//var userInput4 = lastName
//var discStudent = -$1.50
//var discMilitary = -$2.25
//var discEarlybird = -$3.75
//var userInput5 = prompt text
var sectionOne = "$" + 45; //Price of section one seating
var sectionTwo = "$" + 30; //Price of section two seating
var sectionThree = "$" + 15; //Price of section three seating
var userInput1; //The variable created to establish the user's input
userInput1 = Text1; //What userInput1 should equal or result in
Text1 = prompt("Please type in what section you would like to sit in." +
    sectionOne +
    sectionTwo +
    sectionThree); //Prompt used to provide info to the computer
var localArea = "$" + 2; //Price for residing in the local area during the concert (this is to be used for shipping purposes)
var countryArea = "$" + 5; //Price for residing in the country during the concert (this is to be used for shipping purposes)
var intlArea = "$" + 11; //Price for residing internationally during the concert (this is to be used for shipping purposes)
var userInput2; //The variable created to establish the user's input
userInput2 = promptText2; //What userInput2 should equal or result in
var firstName = promptText3; //What the user will enter to establish first name for ticket
var lastName = promptText4; //What the user will enter to establish last name for ticket
var userInput3; //The variable created to establish the user's input
userInput3 = firstName; //What userInput3 should equal or result in
var userInput4; //The variable created to establish the user's input
userInput4 = lastName; //What userInput4 should equal or result in
var discStudent = 1.50; //number that student discount equals or results in
var discMilitary = 2.25; //number that military discount equals or results in
var discEarlybird = 3.75; //number that early bird discount equals or results in
var userInput5; //The variable created to establish user input
userInput5 = promptText5; //What userInput 5 should equal or result in
var totalPrice = [userInput1, userInput2 - userInput5]; //the array and equation that provide the user the price via selections

//TODO create prompts
//prompt = "Please type in what section you would like to sit in.”
//prompt = “Please type the location that applies to you: city, country, or international.”
//prompt = “Please type your First name to place on the ticket.”
//prompt = “Please type your Last name to place on the ticket.”
//prompt = “Please type the discount that applies to you: Student, Military, or Early Bird.”
promptText1 = prompt("Please type in what section you would like to sit in." +
    sectionOne +
    sectionTwo +
    sectionThree); //Prompt used to provide info to the computer
promptText2 = prompt("Please type in the location that applies to you" +
    localArea +
    countryArea +
    intlArea); //Prompt used to provide info to the computer
promptText3 = prompt("Please type your First name to place on the ticket"); //Prompt used to provide info to the computer
promptText4 = prompt("Please type your Last name to place on the ticket"); //Prompt used to provide info to the computer
promptText5 = prompt("Please type the discount that applies to you" +
    discStudent +
    discMilitary +
    discEarlybird); //Prompt used to provide info to the computer
//TODO create outputs
//alert = "You have selected" userInput1
//alert = "Your price for " userInput1 "is" var 1,2, or 3
//alert = “You have selected” userInput2
//alert = “Your name will appear as " firstName + lastName
//alert = “You have selected” userinput5
//alert = “Your total for your selected ticket is” totalPrice
alert("You have selected " + userInput1);
alert("Your price for " + userInput1 + " is" + [sectionOne, sectionTwo, sectionThree] + ".");
alert('You have selected ' + userInput2);
alert("Your name will appear as " + userInput3 + userInput4 + ".");
alert("You have selected " + userInput5 + ".");
alert("Your total for your selected ticket is " + totalPrice + ".");
