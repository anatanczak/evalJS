//jshint esversion: 6
let ageString;
let ageInt;
let jeunes = 0;
let moyens = 0;
let vieux = 0;





do {
    ageString = prompt("Entrer l'age entre 0 et 200");
    ageInt = parseInt(ageString);
    if (ageInt >= 0 && ageInt < 20) {
        jeunes++;
    } else if (ageInt >= 20 && ageInt <= 40) {
        moyens++;
    } else if (ageInt > 40) {
        vieux++;
    }
} while (ageInt < 100);

alert("jeunes: " + jeunes + " moyens: " + moyens + " vieux: " + vieux);