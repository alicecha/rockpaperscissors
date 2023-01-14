// The game will be played against the computer


//Get computer to randomly pick "rock", "paper" or "scissors"
//Create function that randomly picks string within array of 3
function getComputerChoice() {
//Declare an array of 3 strings
    let choiceArray = ["Rock", "Paper", "Scissors"];
//Randomly pick string from array, between position 1 and array length
    let computerChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)];
    return computerChoice;
}




//Get user to pick "rock", "paper" or "scissors"
//Say which of computer or user won.


