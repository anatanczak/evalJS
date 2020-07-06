//jshint esversion: 6
let chosenOption;
let optionIsValid = false;
let answersCount = 0;

let firstAnswer;
let multiplier;
let secondAnswer;
let multiplicand;

let numbers = [];
let numberUserInput;
let nameNumberCount = 1;
let enteredNumberInt;

let enteredWord;
let letterCont = 0;
let enteredLetter;
let result;

while (optionIsValid == false) {
  if (answersCount >= 1) {
    alert("Vous vous êtes trompée.")
  }
  answersCount++;
  chosenOption = prompt("Choisir une option: \n 1 - Multiple \n 2 - Somme et moyenne \n 3 - recherche du nombre de voyelles \n 4 - Rechereche du nombre des characteres suivant");

  switch (chosenOption) {
    case "1":
      optionIsValid = true;
      break;
    case "2":
      optionIsValid = true;
      break;
    case "3":
      optionIsValid = true;
      break;
    case "4":
      optionIsValid = true;
      break;
    default:
      optionIsValid = false;
      break;
  }
}

//get input for option 1 and 2
if (chosenOption === "1") {

  do {
    firstAnswer = prompt("saisissez un entier entre 1 et 100 qui vas servir de multiplicateur");
    multiplier = parseInt(firstAnswer)
    if (multiplier > 0 && multiplier <= 100) {
      break;
    } else {
      firstAnswer = NaN;
    }
  } while (isNaN(firstAnswer));

  do {
    secondAnswer = prompt("saisissez un entier entre 1 et 100 qui vas servir de multiplicand");
    multiplicand = parseInt(secondAnswer)
    if (multiplicand > 0 && multiplicand <= 100) {
      break;
    } else {
      secondAnswer = NaN;
    }
  } while (isNaN(secondAnswer));


} else if (chosenOption === "2") {

  do {
    numberUserInput = prompt("saisissez un entier Nr°" + nameNumberCount + "ou entrer le 0 pour arrêter le saisie.");
    nameNumberCount++;
    enteredNumberInt = parseInt(numberUserInput)
    if (!isNaN(enteredNumberInt)) {
      numbers.push(enteredNumberInt);
    }
  } while (numberUserInput !== "0");

  let lastElement = numbers.pop()

} else {

  do {
    enteredWord = prompt("Entrer un mot valide.");
    if (enteredWord === "") {
      enteredWord = null;
    }
  } while (enteredWord == null)

  if (chosenOption === "4") {
    do {
      enteredLetter = prompt("Entrer une seule lettre.");
      if (enteredLetter === "" || enteredLetter == null) {
        enteredLetter = "hgs";
      }
    } while (enteredLetter.length > 1);
    console.log(enteredLetter.length)
  }
}


//function to multiply
function produit(x, y) {
  return x * y;
}

//function to find a sum and an average
function getSumAndAverage(arrayOfNumbers) {
  let sum = 0;
  let average;

  if (Array.isArray(arrayOfNumbers)) {
    for (const item of arrayOfNumbers) {
      sum = sum + item;
    }
    average = sum / arrayOfNumbers.length

    return {
      sum,
      average
    }
  } else {
    console.log("Fatal Error the optional argument should be array" + arrayOfNumbers);
  }



}



// function to conut vovels
function vovelCountFunction(word) {
  let count = 0;
  for (const letter of word) {

    switch (letter) {
      case "a":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;
      case "y":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      default:
        continue;
    }
  }
  return count;
}

//search for number of carachters in a word

function characterCountFunction(word, character) {
  let count = 0;
  for (const letter of word) {
    if (letter === character) {
      count++
    }
  }

  return count;
}



//show the answer to the user

switch (chosenOption) {
  case "1":
    result = produit(multiplier, multiplicand);
    alert("The result of multiplication is : " + result);
    break;
  case "2":
    result = getSumAndAverage(numbers);
    alert("The average is : " + result.average + " The sum is : " + result.sum);
    break;
  case "3":
    result = vovelCountFunction(enteredWord);
    alert("The number of vovels : " + result);
    break;
  case "4":
    result = characterCountFunction(enteredWord, enteredLetter)
    alert("The number of letters '" + enteredLetter + "' in '" + enteredWord + "' is " + result);
    break;
}