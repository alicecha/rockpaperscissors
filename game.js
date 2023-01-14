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
        return roundOutcome = `No one wins! You both picked ${playerSelection}.`;
    } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
               (playerSelection == "Paper" && computerSelection == "Scissors") ||
               (playerSelection == "Scissors" && computerSelection == "Rock")) {
        return roundOutcome = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return roundOutcome = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}

//Create function that plays 5 rounds of the game and keeps a tally, reporting who won and last at the end.
function game() {
    //declare two variables to keep tally of computer wins and player wins, initiate at 0
    let computerWinCount = 0;
    let playerWinCount = 0;

    //Create a for loop to play the game 5 times
    for (i=1; i<=5; i++) {
        
        //Declare parameters for playRound() function
        const playerSelection = prompt(`Round ${i}: Rock, Paper or Scissors?`);
        const computerSelection = getComputerChoice();

        //call playRound() function to play a round of the game
        playRound(playerSelection, computerSelection);  

        //increment either player score or computer score depending on who wins. Do nothing if neither win.
        switch(true) {
            case roundOutcome.includes("You Lose!"):
                computerWinCount++;
                break;
            case roundOutcome.includes("You Win!"):
                playerWinCount++;
                break;
            default:
                break;
        };

        //log outcome of each round in the console
        console.log(playRound(playerSelection, computerSelection), computerWinCount, playerWinCount);
    };

    //create variable that stores outcome of the 5 rounds
    let gameOutcome = "";

    if (computerWinCount > playerWinCount) {
        gameOutcome = "Computer wins!";
    } else if (playerWinCount > computerWinCount) {
        gameOutcome = "Player wins!";
    } else {
        gameOutcome = "This is a tie!"
    };

    console.log(gameOutcome);
}
