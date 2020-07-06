let num;
let isPrime = true;


// je ne traite pas toute les erreures possibles lors de la saisie
do {
    num = prompt("saisissez un entier entre 1 et 100");
    num = parseInt(num)
    if (num > 0 && num <= 100) {
        break;
    } else {
        num = NaN;
    }
} while (isNaN(num));

//get the biggest possible diviser of  the given number
let biggestPossibleDiviser = Math.sqrt(num);
biggestPossibleDiviser = Math.ceil(biggestPossibleDiviser);
// console.log(biggestPossibleDiviser);

if (num <= 1) {
    isPrime = false;
} else if (num === 2) {
    isPrime = true;
} else if (num % 2 === 0) {
    isPrime = false;
} else {

    for (i = 3; i <= biggestPossibleDiviser; i += 2) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}


if (isPrime) {
    alert("prime");
} else {
    alert("composite");
}



//Algorithm - Sieve of Eratosthenes


// //create an array of all numbers that are 
// let isComposite = [givenNumber + 1];
// console.log(isComposite);

// // array to hold primes
// let primes = [givenNumber / 10];

// for (i = 2; i * i <= givenNumber; i++) {
//     // if prime (ie !== 1)
//     if (isComposite[i] !== 1) {
//         //now mark all composites starting at m^2 which are multiples of m
//         for (j = i * i; j <= givenNumber; j += i) {
//             //mark position z as composite (1)
//             isComposite[j] = 1;
//         }
//     }
// }