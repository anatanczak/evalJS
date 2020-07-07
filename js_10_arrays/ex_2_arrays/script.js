//jshint esversion: 6
let chosenOption;
let optionIsValid = false;
let answersCount = 0;

let tableau = [];
let tableauLonguer;
let arrayItem;
let itemNumber = 1;


while (optionIsValid == false) {
  if (answersCount >= 1) {
    alert("Vous vous êtes trompée.")
  }
  answersCount++;
  chosenOption = prompt("Choisir une option: \n 1 - Affichage de tous les valeur du tableau \n 2 - Affichage du contenu d'une valeur dont l'index est saisi au clavier \n 3 - Affichage du maximum et de la moyenne");

  switch (chosenOption) {
    case "1":
      tableau = saisieTab();
      afficheTab(tableau);
      optionIsValid = true;
      break;
    case "2":
      tableau = saisieTab();
      rechercheTab(tableau);
      optionIsValid = true;
      break;
    case "3":
      tableau = saisieTab();
      infoTab(tableau);
      optionIsValid = true;
      break;
    default:
      optionIsValid = false;
      break;
  }
}





function getInteger() {

  let lengthStr;
  let lengthInt;

  do {
    lengthStr = prompt("saisissez un entier entre 1 et 100 qui vas servir pour la longeur du tableau");
    lengthInt = parseInt(lengthStr);
    if (lengthInt > 0 && lengthInt <= 100) {
      break;
    } else {
      lengthStr = NaN;
    }
  } while (isNaN(lengthStr));
  return lengthInt;
}



function initTab(long) {
  tableau.length = long;
}

function saisieTab() {
  let temporaryArray = [];
  let arrayItem;
  do {
    arrayItem = prompt("saisissez un entier entre -1000 et 1000 qui vas servir pour une de valeur du tableau. Vous pouvez saisir autant que vous voulez mais sachiez que le programme prend en compte que le nombre qui correspond à la longuer souhaité du tableau");
    arrayItemInt = parseInt(arrayItem);

    if (arrayItemInt > -1000 && arrayItemInt <= 1000) {
      temporaryArray.push(arrayItemInt);
    } else if (arrayItem == null) {
      alert("Ok. Merci");
    } else {
      alert("Cela n'est pas une valeur valable.");
    }

  } while (arrayItem != null);

  return temporaryArray;

}

function afficheTab(tb) {
  //TO DO : perform arguments check - quantity
  //TO DO : perform array check
  let cleanArray = tb.filter(function () {
    return true
  });
  alert(cleanArray);
}




function rechercheTab(tb) {
  //TO DO : perform arguments check - quantity
  //TO DO : perform array check
  //ASK : why do we use return true?? return only objects that are true? can we see inside of this method?
  let cleanArray = tb.filter(() => {
    return true
  }); //the brackets with the arrow is an alternative way to define a callback func() =>
  let index;
  let indexStr;
  let temporary = cleanArray.length - 1;

  if (temporary < 0) {
    console.log("the array is empty l 74");
    return;
  }


  do {
    indexStr = prompt("saisissez un entier entre 0 et " + temporary + " qui vas servir d'un index");
    index = parseInt(indexStr);
    if (index >= 0 && index <= temporary) {
      break;
    } else {
      indexStr = NaN;
    }
  } while (isNaN(indexStr));

  alert(tb[index]);

}





function infoTab(tb) {
  //TO DO : perform arguments check - quantity
  //TO DO : perform array check
  let cleanArray = tb.filter(() => {
    return true
  }); //the brackets with the arrow is an alternative way to define a callback func() =>
  let sum = 0;
  let max;
  let av;
  if (cleanArray.length === 0) {
    alert("Max et moyenne est 0 car il n y a pas des items")
  } else if (cleanArray.length === 1) {
    alert("Max et moyenne est " + cleanArray[0]);
  } else {
    max = Math.max(...cleanArray);

    for (item in cleanArray) {
      sum = sum + item;
    }

    av = sum / cleanArray.length;
  }

  alert("Max is " + max + " Average is " + av);
}




















// the end