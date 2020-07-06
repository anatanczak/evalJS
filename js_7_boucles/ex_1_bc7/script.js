let names = [];
let answer;
let nameNumber = 1;
let para = document.createElement('p');

do {
    answer = prompt("saisissez le prénom Nr°" + nameNumber + "ou Click sur Annuler pour arrêter le saisie.");
    nameNumber++;
    if (answer !== null && answer !== "") {
        names.push(answer);
    }
    console.log(answer);
} while (answer);


for (const name of names) {

    let line = document.createTextNode(name);
    para.appendChild(line);

    let separator = document.createTextNode(", ")
    para.appendChild(separator);

}

//removes the separator at the end
para.removeChild(para.lastChild)
document.getElementById("main-div").appendChild(para)