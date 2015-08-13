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
//prompts
//TODO create prompts
//prompt = "Enter your age here..."
partyPeople = prompt("Enter how many people are at the event...");
totalPies = prompt("Enter how many pizzas were ordered...");
pizzaSlices = prompt("Enter how many slices of pizza...");
slicesPer = totalPies / pizzaSlices * partyPeople;
//outputs
//TODO create outputs
alert("Each person ate " + slicesPer + " slices of pizza at the party.");
console.log("Each person ate " + slicesPer + " slices of pizza at the party.");