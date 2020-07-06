let numbers = [];
let num;
let nameNumberCount = 1;
let min;
let max;

//get user input
do {
    num = prompt("saisissez un entier Nr°" + nameNumberCount + "ou entrer le 0 pour arrêter le saisie.");
    nameNumberCount++;
    num = parseInt(num)
    if (!isNaN(num)) {
        numbers.push(num);
    }
} while (num !== 0);

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


