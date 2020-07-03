let inputNumberString;
let inputNumInt;
let sum = 0;

//get the input
do {
    inputNumberString = prompt("Entrez un nombre en entier de 1 à 1000.");
    inputNumInt = parseInt(inputNumberString);
    if (inputNumInt > 0 && inputNumInt <= 1000) {
        console.log(inputNumInt);
    } else {
        inputNumberString = NaN;
    }
} while (isNaN(inputNumberString));

//calculate
for (i = 0; i < inputNumInt; i++) {
    sum = sum + i;
}

alert("La somme est " + sum);