let score = 0;
let timeleft = 10;
let timeId = null;

const timeDisplay = document.getElementbyId("time-display");
const scoreDisplay = document.getElementbyId("score-display");
const targetElement = document.getElementbyId("target");
const startButton = document.getElementbyId("start-btn");

function startGame()
{
    score = 0;
    timeleft = 10;
    timeDisplay.innerText = timeLeft;
    scoreDisplay.innerText = score;

    startButton.disabled = true;
    targetElement.style.dsiplay = "block";
}