let numbers = [];
let numberUserInput;
let nameNumberCount = 1;
let enteredNumberInt;
let min;
let max;


do {
    numberUserInput = prompt("saisissez un entier Nr°" + nameNumberCount + "ou entrer le 0 pour arrêter le saisie.");
    nameNumberCount++;
    enteredNumberInt = parseInt(numberUserInput)
    if (!isNaN(enteredNumberInt)) {
        numbers.push(enteredNumberInt);
    }
} while (numberUserInput !== "0");

// get 0 out of array
let lastElement = numbers.pop()

max = Math.max(...numbers);
min = Math.min(...numbers);

alert("Le max est: " + max + " Le min est: " + min);