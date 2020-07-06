let phrase = prompt("Entrer une phrase.")
let letter = prompt("Entrer une lettre.")

//ex 2 compter le nombre de lettres
function letterCounter(phrase, lettre) {
let count = 0;

  if (phrase === undefined || lettre === undefined) {
    return 0;
  }
if ((typeof phrase === 'string' || phrase instanceof String) && (typeof lettre === 'string' || lettre instanceof String) ){
  for (const letter of phrase) {
    if (letter === lettre) {
      count++;
    }
  }
}
  return count;
}

let answer = letterCounter(phrase, letter)
if(answer) {
alert(`Le nombre de lettre : "${letter}" dans la phrase : "${phrase}" est ${answer}`)
}else{
alert("Vous n'avez pas rentre une phrase valide ou une lettre valide")
}
