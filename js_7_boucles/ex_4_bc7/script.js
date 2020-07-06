let number1;
let number2;
let sum = 0;
let message = "Le calcule n'est pas possible";
let para = document.createElement('p');

//get the first number
do {
    number1 = prompt("Entrez un nombre en entier de 0 à 1000.");
    number1 = parseInt(number1);
    if (number1 > 0 && number1 <= 1000) {
        console.log(number1);
    } else {
        number1 = NaN;
    }
} while (isNaN(number1));

//get the second number
do {
    number2 = prompt("Entrez un nombre en entier de 0 à 1000.");
    number2 = parseInt(number2);
    if (number2 > 0 && number2 <= 1000) {
        console.log(number2);
    } else {
        number2 = NaN;
    }
} while (isNaN(number2));

//calculate
if (number2 > number1) {
    for (i = number1; i <= number2; i++) {
        sum = sum + i
    }
    message = `La somme est:  ${sum}`
} 

let line = document.createTextNode(message);
para.appendChild(line);
document.getElementById("main-div").appendChild(para);