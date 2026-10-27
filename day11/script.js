let score = 0;
let timeLeft = 10;
let timeId = null;

const timeDisplay = document.getElementById("time-display");
const scoreDisplay = document.getElementById("score-display");
const targetElement = document.getElementById("target");
const startButton = document.getElementById("start-btn");

function startGame()
{
    score = 0;
    timeLeft = 10;
    timeDisplay.innerText = timeLeft;
    scoreDisplay.innerText = score;

    startButton.disabled = true;
    targetElement.style.dsiplay = "block";

    timeId = setInterval(countdown,1000);
}
 function countdown()
 {
    timeLeft--:
    timeDisplay.innerText = timeLeft;
 }