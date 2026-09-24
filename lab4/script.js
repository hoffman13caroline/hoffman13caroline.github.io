let playerHealth = 1000;
const withdrawAmount = 100;
const depositAmount = 100;

function withdraw() {
    playerHealth = playerHealth - withdrawAmount;

    const healthText = document.getElementById("health-display");
    const statusText = document.getElementById("status-message");

healthText.innerText = playerHealth;

if(playerHealth < 1000)
{
    healthText.innerText = playerHealth;
    statusText.innerText = "Money Withdrawn";
}
}

function deposit() {
    playerHealth = playerHealth + depositAmount;

    const healthText = document.getElementById("health-display");
    const statusText = document.getElementById("status-message");

if(playerHealth > 1000)
{
    healthText.innerText = playerHealth;
    statusText.innerText = "Money Deposited";
}

healthText.innerText = playerHealth;
}