let linesOfCode = 0;
let clickPower = 1;
let upgradeCost = 50;
let interns = 0;
let internCost = 100;
let employees = 0;
let employeeCost = 1000;

function writeCode() {
    linesOfCode = linesOfCode + clickPower;
    updateScreen();
}

function buyKeyboard(){
    if(linesOfCode >= upgradeCost)
    {
        linesOfCode = linesOfCode - upgradeCost;
        clickPower = clickPower + 1;
        upgradeCost = upgradeCost * 1.5;
        updateScreen();
    }
}

function buyIntern(){
    if(linesOfCode >= internCost)
    {
        linesOfCode = linesOfCode - internCost;
        interns = interns + 1;
        internCost = internCost * 1.5;
        updateScreen();
    }
}
function doubleScore(){
    if(linesOfCode >= 5000)
    {
        linesOfCode = linesOfCode - 5000;
        linesOfCode = linesOfCode * 2;
        updateScreen();
    }
}

function buyEmployee(){
    if(linesOfCode >= employeeCost)
    {
        linesOfCode = linesOfCode - employeeCost;
        employees = employees + 1;
        employeeCost = employeeCost * 1.5;
        updateScreen();
    }
}
function updateScreen() {
    document.getElementById("score-display").innerText = linesOfCode + " Lines of Code";

    document.getElementById("power-display").innerText = clickPower;
    document.getElementById("cost-display").innerText = upgradeCost;

    document.getElementById("intern-display").innerText = interns;
    document.getElementById("cost-intern-display").innerText = internCost

    document.getElementById("employee-display").innerText = employees;
    document.getElementById("cost-employee-display").innerText = employeeCost;
}

setInterval(function () {
if(interns>0)
{
    linesOfCode = linesOfCode + interns;
    updateScreen();
}
},
1000
);

setInterval(function () {
if(employees>0)
{
    linesOfCode = linesOfCode + employees;
    updateScreen();
}
},
500
);
