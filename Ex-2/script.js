let inputNumberString;
let inputNumInt;
let sum = 0;

do {
    inputNumberString = prompt("Entrez un nombre en entier de 1 à 1000.");
    inputNumInt = parseInt(inputNumberString);
    if (inputNumInt > 0 && inputNumInt <= 1000) {
        console.log(inputNumInt);
    } else {
        inputNumberString = NaN;
    }
} while (isNaN(inputNumberString));

for (i = 0; i < inputNumInt; i++) {
    sum = sum + i;
}

alert(sum);