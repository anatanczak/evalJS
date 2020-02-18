//jshint esversion: 6
let multiplicandString;
let givenMultiplicand;

// get givenMultiplicand
do {
    multiplicandString = prompt("Entrez un multiplicand (un nombre positif)");
    givenMultiplicand = parseInt(multiplicandString);
    if (givenMultiplicand > 0) {
        console.log(givenMultiplicand);
    } else {
        alert("C'est n'est pas un multiplicand valable!");
        multiplicandString = NaN;
    }
} while (isNaN(multiplicandString));


//printout the table of multiplication for a given multiplicand
function tableMultiplicationFor(multiplicand) {
    for (i = 0; i <= 10; i++) {
        console.log(i + " x " + multiplicand + " = " + i * multiplicand);
    }
}
tableMultiplicationFor(givenMultiplicand);