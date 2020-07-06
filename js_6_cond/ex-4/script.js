let single;
let numberOfKidsString;
let numberOfKidsInt = 0;
let lowWage;
let bossPart;

//une personne peut entre en couple sans être mariée c'est pour cette raison que je considere en couple toutes les personnes qui ne sont pas celibataires 
single = confirm("Etes-vous celibataire ?")

numberOfKidsString = prompt("Combien d'enfant avez-vous ? Entrer 0 si vous n'en avez pas.");
numberOfKidsInt = parseInt(numberOfKidsString);

while (isNaN(numberOfKidsInt)) {
    numberOfKidsString = prompt("Vous vous êtes trompé. Entrez un nombre en entier.");
    numberOfKidsInt = parseInt(numberOfKidsString);
}

lowWage = confirm("Est votre salaire mesuel inférieur à 1200 € ?")


if (single && lowWage) {
    bossPart = 30;
} else if (single && !lowWage) {
    bossPart = 20;
} else if (!single && lowWage) {
    bossPart = 35;
} else {
    bossPart = 25;
}

if (numberOfKidsInt > 0) {
    let supp = numberOfKidsInt * 10;
    let result = bossPart + supp;

    if (result >= 50) {
        bossPart = 50;
    } else {
        bossPart = result;
    }


}


alert("La participation du patron est " + bossPart + "%");