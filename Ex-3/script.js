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

//my solution 
// max = Math.max(...numbers);
// min = Math.min(...numbers);

//other solution
max = 0;
min = Number.MAX_SAFE_INTEGER;

for (const value of numbers) {
    if (value > max) {
        max = value;
    }
    if (value < min) {
        min = value;
    }
}


alert("Le max est: " + max + " Le min est: " + min);