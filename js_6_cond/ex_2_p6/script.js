var birthYear;
var currentYear = new Date().getFullYear();
var age;
var legalAge = false;

//get the year from the user
birthYear = prompt("Quelle est votre année de naissance ?");


//convert user input into an int

function convertStringIntoIntAndCheckIfValid(stringToConvert, currentYear) {

        var year = parseInt(stringToConvert);

        if (year >= 1900 && year <= currentYear) {
            return year;
        } else {
            return 0;
        }
}

birthYear = convertStringIntoIntAndCheckIfValid(birthYear, currentYear);

if (birthYear == 0) {
    alert("Désolé, vous navez pas entré une année de naissance valable.");
} else {
    age = currentYear - birthYear;

    if (age >= 18) {
        legalAge = true;
    }

    if (legalAge) {
        alert("Vous avez " + age + " ans et vous êtes majeur.");
    } else {
        alert("Vous avez " + age + " an(s) et vous êtes mineur.");
    }
}