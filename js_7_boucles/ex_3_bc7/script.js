let input;
let para = document.createElement('p');
let sum = 0;

do {
    input = prompt("Entrez un nombre en entier de 0 à 100.");
    input = parseInt(input);
    if (input > 0 && input <= 1000) {
        console.log(input);
    } else {
        input = NaN;
    }
} while (isNaN(input));

for (i = 0; i < input; i++) {
    sum = sum + i;

}
let line = document.createTextNode(sum);
para.appendChild(line);
document.getElementById("main-div").appendChild(para);