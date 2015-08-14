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
var sectionOne = "$" + 45;
var sectionTwo = "$" + 30;
var sectionThree = "$" + 15;
var userInput1;
userInput1 = promptText1;
var localArea = "$" + 2;
var countryArea = "$" + 5;
var intlArea = "$" + 11;
var userInput2 = promptText2;
var firstName = promptText3;
var lastName = promptText4;
var userInput3 = firstName;
var userInput4 = lastName;
var discStudent = 1.50;
var discMilitary = 2.25;
var discEarlybird = 3.75;
var userInput5 = promptText5;
var totalPrice = [userInput1, userInput2 - userInput5]

//TODO create prompts
//prompt = "Please type in what section you would like to sit in.”
//prompt = “Please type the location that applies to you: city, country, or international.”
//prompt = “Please type your First name to place on the ticket.”
//prompt = “Please type your Last name to place on the ticket.”
//prompt = “Please type the discount that applies to you: Student, Military, or Early Bird.”
promptText1 = prompt("Please type in what section you would like to sit in." +
    sectionOne +
    sectionTwo +
    sectionThree);
promptText2 = ("Please type in the location that applies to you" +
    localArea +
    countryArea +
    intlArea);
promptText3 = ("Please type your First name to place on the ticket");
promptText4 = ("Please type your Last name to place on the ticket");
promptText5 = "Please type the discount that applies to you" +
    discStudent +
    discMilitary +
    discEarlybird;
//TODO create outputs
//alert = "You have selected" userInput1
//alert = "Your price for " userInput1 "is" var 1,2, or 3
//alert = “You have selected” userInput2
//alert = “Your name will appear as " firstName + lastName
//alert = “You have selected” userinput5
//alert = “Your total for your selected ticket is” totalPrice
alert("You have selected " + userInput1);
alert("Your price for " + userInput1 + " is" + sectionOne + ".");
alert('You have selected ' + userInput2);
alert("Your name will appear as " + userInput3 + userInput4 + ".");
alert("You have selected " + userInput5 + ".");
alert("Your total for your selected ticket is " + totalPrice + ".");
