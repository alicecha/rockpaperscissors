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

//Create function that plays a single round of the game.
//The function will take two parameters: the player selection and the computer selection.
function playRound(playerSelection, computerSelection) {
    //create outcome variable which states whether player wins or loses depending on both selections.
    //log outcome in console
    if (playerSelection == computerSelection) {
        return outcome = `No one wins! You both picked ${playerSelection}.`;
    } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
               (playerSelection == "Paper" && computerSelection == "Scissors") ||
               (playerSelection == "Scissors" && computerSelection == "Rock")) {
        return outcome = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return outcome = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}

//Define the two parameters of the function and test result in the console:
    //The player selection is fixed for now.
    const playerSelection = "Rock";
    //The computer selection is generated randomly from the getComputerChoice function
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));



