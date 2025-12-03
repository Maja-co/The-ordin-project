console.log("Welcome to rock paper scissors")

let humanScore = 0;
let computerScore = 0;

/*
// Første input
let svar = prompt("Chose 0 for rock, 1 for paper and 2 for scissors (or type 'exit')")

while (svar !== "exit") {
    // Tjek om input er 0, 1 eller 2
    if (svar === "0" || svar === "1" || svar === "2") {
        const humanChoice = getHumanChoice(svar);
        const computerChoice = getComputerChoice();

        console.log("Du valgte: " + humanChoice);
        console.log("Computeren valgte: " + computerChoice);
        
        playRound(computerChoice, humanChoice);
    } else {
        console.log("Ugyldigt input. Skriv venligst 0, 1 eller 2.");
    }

    svar = prompt("Chose 0, 1, 2 again or type 'exit'");
}
*/

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(valgte) {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[valgte];
}

function playRound(computerChoice, humanChoice) {
    const result = document.createElement("p");
    const divResult = document.querySelector("#result-display");
    let string = ""
    switch (true) {
        case computerChoice === humanChoice:
            string = "Draw"
            break;
        case computerChoice === "Rock" && humanChoice === "Scissors":
            string ="You lose! Rock beats scissors";
            computerScore++;
            break;
        case computerChoice === "Paper" && humanChoice === "Rock":
            string ="You lose! Paper beats Rock";
            computerScore++;
            break;
        case computerChoice === "Scissors" && humanChoice === "Paper":
            string = "You lose! Scissors beats Paper";
            computerScore++;
            break;
        default:
            string ="You Win!" ;
            humanScore++;
    }
    string += " (Score: " + humanScore + " - " + computerScore + ")";
    result.textContent = string
    divResult.appendChild(result);
    scoreCount();
}

function scoreCount() {
    if (humanScore == 5|| computerScore === 5){
        if (humanScore === 5){
            alert("Yay you win!")
            humanScore = 0;
            computerScore = 0;
        } else {
            alert("You lost!")
            computerScore = 0;
            humanScore = 0;
        }
    }
}



// ---- Det nye kode
const rockBtn = document.querySelector("#rock-btn"); 
rockBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "Rock");
});

const paperBtn = document.querySelector("#paper-btn"); 
paperBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "Paper");
});

const scissorsBtn = document.querySelector("#scissors-btn"); 
scissorsBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "Scissors");
});
