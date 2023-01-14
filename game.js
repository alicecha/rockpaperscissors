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
    //make the parameters case-insensitive by converting first letter to uppercase and rest lower case.
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
    
    //return outcome variable which states whether player wins or loses depending on both selections.
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
    const playerSelection = "RoCK";
    //The computer selection is generated randomly from the getComputerChoice function
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));



