let userInputFirstNumber;
let userInputSecondNumber;
let userInputForOperator;
let operatorIsValid = false;
let firstInt;
let secondInt;


userInputFirstNumber = prompt("Entrez un nombre en entier.");
firstInt = parseInt(userInputFirstNumber);

while (isNaN(firstInt)) {
    userInputFirstNumber = prompt("Vous vous êtes trompé. Entrez un nombre en entier.");
    firstInt = parseInt(userInputFirstNumber);
}

userInputSecondNumber = prompt("Entrez un autre nombre en entier.");
secondInt = parseInt(userInputSecondNumber)


while (isNaN(secondInt)) {
    userInputSecondNumber = prompt("Vous vous êtes trompé. Entrez un nombre en entier.");
    secondInt = parseInt(userInputSecondNumber);
}





while (operatorIsValid == false) {

    userInputForOperator = prompt("Entrez un seul operateur : +, -, * ou /");
    console.log(userInputForOperator)
    console.log(operatorIsValid)
    switch (userInputForOperator) {
        case "+":
            operatorIsValid = true;
            break;
        case "-":
            operatorIsValid = true;
            break;
        case "*":
            operatorIsValid = true;
            break;
        case "/":
            operatorIsValid = true;
            break;
        default:
            operatorIsValid = false;
            break;
    }

    if (!operatorIsValid) {
        alert("Vous vous êtes trompé.");
    } else {
        alert("Vous avez entré un operateur valide.");
    }
    console.log(operatorIsValid)
}

if (secondInt === 0 && userInputForOperator === "/") {
    alert("Désolé, sur cette planète la division par 0 n'est pas possible.")
} else {
    switch (userInputForOperator) {
        case "+":
            alert(firstInt + secondInt)
            break;
        case "-":
            alert(firstInt - secondInt)
            break;
        case "*":
            alert(firstInt * secondInt)
            break;
        case "/":
            alert(firstInt / secondInt)
            break;
    }
}