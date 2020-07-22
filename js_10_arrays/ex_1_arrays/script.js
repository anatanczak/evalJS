let tableau = [];
let length;
let arrayItem;


do {
    length = prompt("saisissez un entier entre 1 et 100 qui va servir pour la longeur du tableau");
    length = parseInt(length)
    if (length > 0 && length <= 100) {
console.log(length)
        break;
    } else {
        length = NaN;
    }
} while (isNaN(length))


for (let i = 0; i < length; i++){
do {
arrayItem = prompt(`Saisissez la valeur Nr°${(i+1)}.`)

    if (arrayItem) {
    tableau.push(arrayItem)
    break
    }
} while (!arrayItem)

}

alert(`Les items de tableau sont : [${tableau}]  La longueur est : ${length}`)

//OLD CODE
// do {
//     length = prompt("saisissez un entier entre 1 et 100 qui vas servir pour la longeur du tableau");
//     length = parseInt(length)
//     if (length > 0 && length <= 100) {
//         break;
//     } else {
//         length = NaN;
//     }
// } while (isNaN(length))


// for (let i = 0; i < length; i++){
// do {
// arrayItem = parse(prompt("saisissez un entier Nr°" + i + "ou appuer Annuler pour arrêter le saisie."))

//     if (!isNan(arrayItem)) {
//     tableau.push(arrayItem)
//     break
//     }
// } while (isNan(arrayItem))

// }
