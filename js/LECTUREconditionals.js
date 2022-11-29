let magicNumber = 3;
let userChoice = 3;

if (userChoice === magicNumber){
    console.log("You guessed it!");
} else if (userChoice < magicNumber) {
    console.log("Too low!")
} else {
    console.log("Too high!");
}

//show without the else bc its optional

//make it into a function

function getMessageFromUserChoice(userChoice, magicNumber){
    if(userChoice === magicNumber){
        return "You guessed the number!";
    }
}
