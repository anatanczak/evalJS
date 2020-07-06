let answer;
let count = 0;

answer = prompt("Entrer un mot");

if (answer == null || answer === "") {
    alert("Vous n'avez pas entré un mot valide.")
} else {
    for (const letter of answer) {

        switch (letter) {
            case "a":
                count++;
                break;
            case "o":
                count++;
                break;
            case "u":
                count++;
                break;
            case "y":
                count++;
                break;
            case "e":
                count++;
                break;
            case "i":
                count++;
                break;
            default:
                continue;
        }
    }

    var length = answer.length;
    console.log(length);
    alert("Le nombre de voyelles est: " + count);
}