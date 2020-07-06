//jshint esversion: 6
let randomNumber = Math.floor(Math.random() * 20);
let num;
num = prompt("Enter le nombre entre 0 et 100");
console.log(randomNumber);



while (num != randomNumber) {
  if (num > randomNumber) {
    num = prompt("No! Le nombre est plus petit ! Reessayez !");
  } else if (num < randomNumber) {
    num = prompt("No! Le nombre est plus grand ! Reessayez !");
  }
}
alert("Vous avez trouvé c'est " + randomNumber);
