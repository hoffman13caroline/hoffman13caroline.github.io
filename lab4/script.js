let playerHealth = 1000;
const withdrawAmount = 100;
const depositAmount = 100;

function withdraw() {
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
statusText.innerText = "No Blance";
statusText.style.color = "#f9331d";
statusText.style.fontWeight = "bold";

document.body.style.backgroundColor = "#2f4f4f";

document.querySelector("subtract").disabled = true;
document.querySelector("subtract").innerText = "No Money to Withdraw";
}
}

function deposit() {
    playerHealth = playerHealth + depositAmount;

    const healthText = document.getElementById("health-display");
    const statusText = document.getElementById("status-message");
const button = document.getElementById("add");
if(playerHealth + depositAmount)
{
    healthText.innerText = playerHealth;
    statusText.innerText = "Money Deposited";
}
else
{
healthText.innerText = 0;
statusText.innerText = "No Balance";
statusText.style.color = "#f9331d";
statusText.style.fontWeight = "bold";

document.body.style.backgroundColor = "#2f4f4f";

document.querySelector("subtract").disabled = true;
document.querySelector("subtract").innerText = "Please Deposit Money";
}
}
healthText.innerText = playerHealth;
}