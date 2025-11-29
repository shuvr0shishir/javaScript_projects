//selectors
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreTotal = document.querySelector("#user-score");
const compScoreTotal = document.querySelector("#comp-score");


//functions here
const genCompChoice = () => {
    const rndIdx = Math.floor(Math.random() * 3); //will generate random number 0-2
    return choiceList[rndIdx];
};

const drawGame = (userChoice, compChoice) => {
    msg.textContent = `DRAW! ${userChoice} = ${compChoice}`;
    msg.style.backgroundColor = "rgb(0, 0, 51)";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreTotal.innerText = userScore;
        msg.textContent = `WIN! ${userChoice} > ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreTotal.innerText = compScore;
        msg.textContent = `LOST! ${userChoice} < ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame(userChoice, compChoice);
    } else {
        let userWin = false;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors" ? true : false;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper" ? true : false;
        } else {
            userWin = compChoice === "rock" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


//main code 
const choiceList = [];
choices.forEach((choice) => {
    choiceList.push(choice.getAttribute("id")); //assign in arr = [rock,scissors, paper]

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

let userScore = 0;
let compScore = 0;