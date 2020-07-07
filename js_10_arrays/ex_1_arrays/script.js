let tableau = [];
let length;
let arrayItem;
let itemNumber = 1;


do {
    length = prompt("saisissez un entier entre 1 et 100 qui vas servir pour la longeur du tableau");
    length = parseInt(length)
    if (length > 0 && length <= 100) {
        break;
    } else {
        length = NaN;
    }
} while (isNaN(length));

do {
    arrayItem = prompt("saisissez un entier Nr°" + itemNumber + "ou appuer Annuler pour arrêter le saisie.");
    itemNumber++;
    if (arrayItem !== null);
    tableau.push(arrayItem);

} while (arrayItem !== null);

alert(tableau);