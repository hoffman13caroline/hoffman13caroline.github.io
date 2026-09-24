let playerHealth = 1000;
const withdrawAmount = 100;
const depositAmount = 100;

function takeWithdraw() {
    playerHealth = playerHealth - withdrawAmount;

    const healthText = document.getElementById("health-display");
    const statusText = document.getElementById("status-message");
const button = document.getElementById("subtract");
healthText.innerText = playerHealth;


if(playerHealth - withdrawAmount)
{
    healthText.innerText = playerHealth;
    statusText.innerText = "Money Withdrawn";
}
else
{
healthText.innerText = 0;
statusText.innerText = "No Balance";
statusText.style.color = "#f9331d";
statusText.style.fontWeight = "bold";

document.body.style.backgroundColor = "#2f4f4f";

document.querySelector(button id="subtract").disabled = true;
document.querySelector(button id="subtract").innerText = "Add Money";
}
}

function takeDeposit() {
    playerHealth = playerHealth + depositAmount;

    const healthText = document.getElementById("health-display");
    const statusText = document.getElementById("status-message");
const button = document.getElementById("add");

if(playerHealth + depositAmount)
{
    healthText.innerText = playerHealth;
    statusText.innerText = "Money Deposited";
}
}
