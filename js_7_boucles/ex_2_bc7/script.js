let input;
let para = document.createElement('p');

do {
    input = prompt("Entrez un nombre en entier de 0 à 100.");
    input = parseInt(input);
    if (input > 0 && input <= 100) {
        console.log(input);
    } else {
        input = NaN;
    }
} while (isNaN(input));

for (i = 0; i < input; i++) {
    console.log(i);

    let line = document.createTextNode(i);
    para.appendChild(line);

    let separator = document.createTextNode(", ");
    para.appendChild(separator);
}

//removes the separator at the end
para.removeChild(para.lastChild);
document.getElementById("main-div").appendChild(para);