"use strict"

// console.log("Hello from external JavaScript!");
//
// alert("Welcome to my Website!")
//
// let color = prompt('What is your favorite color?');
// alert(`Great, ${color} is my favorite color too!`);

let pricePerDay= prompt('How much does it cost per day to rent a movie per day?');
let littleMermaid = prompt('How many days are you renting The Little Mermaid?');
let brotherBear = prompt('How many days are you renting Brother Bear?');
let hercules = prompt('How many days are you renting Hercules?');
let totalPrice = ((parseInt(littleMermaid) + parseInt(brotherBear) + parseInt(hercules)) * pricePerDay);
alert(`Your total cost will be $${totalPrice}.`);
