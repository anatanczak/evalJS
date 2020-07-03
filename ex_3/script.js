let numbers = [];
let numberUserInput;
let nameNumberCount = 1;
let enteredNumberInt;
let min;
let max;

//get user input
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

//my solution (calculate the max and min)
if (numbers === undefined || numbers.length == 0) {
 alert("C'est pas possible de calculer le max ou le min sans aucun nombre. Desolé.");   
}else{
max = Math.max(...numbers);
min = Math.min(...numbers);

alert("Le max est: " + max + " Le min est: " + min);
}


//other solution
// max = 0;
// min = Number.MAX_SAFE_INTEGER;

// for (const value of numbers) {
//     if (value > max) {
//         max = value;
//     }
//     if (value < min) {
//         min = value;
//     }
// }


