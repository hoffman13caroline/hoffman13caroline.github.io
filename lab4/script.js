let playerHealth = 1000;
const withdrawAmount = 100;
const depositAmount = 100;

function withdraw() {
    playerHealth = playerHealth - withdrawAmount;

    const healthText = document.getElementById("health-display");
    const statusText = document.getElementById("status-message");

healthText.innerText = playerHealth;


if(playerHealth > 0)
{
    healthText.innerText = playerHealth;
    statusText.innerText = "-$100";
}
else
{
healthText.innerText = 0;
statusText.innerText = "No Balance - $0";
statusText.style.color = "#f9331d";
statusText.style.fontWeight = "bold";

document.body.style.backgroundColor = "#5a1a1a";

document.querySelector("button").disabled = true;
document.querySelector("button").innerText = "Dead";
}
}

function deposit() {
    playerHealth = playerHealth + depositAmount;

    const healthText = document.getElementById("health-display");
    const statusText = document.getElementById("status-message");

healthText.innerText = playerHealth;
}