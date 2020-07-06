//jshint esversion: 6
let age;
let personUnder20 = 0;
let adult = 0;
let adultOver40 = 0;



do {
    age = prompt("Entrer l'age entre 0 et 200");
    age = parseInt(age);
    if (age >= 0 && age < 20) {
        personUnder20++;
    } else if (age >= 20 && age <= 40) {
        adult++;
    } else if (age > 40) {
        adultOver40++;
    }
} while (age < 100);

alert("Jeunes: " + personUnder20 + " adultes: " + adult + " adultes de plus de 40 ans: " + adultOver40);