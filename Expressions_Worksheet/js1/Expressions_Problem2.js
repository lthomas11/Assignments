/*
 Leonard Thomas
 SDI 150812
 Expressions Worksheet
 */
//variables
//TODO create variables
//var pizzaSlices
//var partyPeople
//var total slices
var pizzaSlices;
var partyPeople;
var slicesPer;
var totalPies;
var sparkysKeep;
var leftOvers;
//prompts
//TODO create prompts
//prompt = "Enter your age here..."
partyPeople = prompt("Enter how many people are at the event...");
totalPies = prompt("Enter how many pizzas were ordered...");
pizzaSlices = prompt("Enter how many slices of pizza...");
leftOvers = prompt("Enter how many slices are left over...");
slicesPer = totalPies / pizzaSlices * partyPeople;
sparkysKeep = slicesPer - leftOvers;
//outputs
//TODO create outputs
alert("Each person ate " + slicesPer + " slices of pizza at the party.");
alert("Sparky can eat " + sparkysKeep + " slices of pizza!");
console.log("Each person ate " + slicesPer + " slices of pizza at the party.");