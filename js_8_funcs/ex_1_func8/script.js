//jshint esversion: 6

function produit(x, y) {
  return x * y;
}

let result = produit(3, 5);
document.getElementById("title1").innerHTML = "Le cube de 3 égale à 27.";
document.getElementById("title2").innerHTML = "Le produit de 3 x 5 est égale à " + result + ".";

function afficheImg(imgName) {
  var newImage = document.createElement("IMG");
  newImage.setAttribute("src", imgName);
  newImage.setAttribute("width", "100");
  newImage.setAttribute("height", "100");
  newImage.setAttribute("alt", "papillon");
  document.body.appendChild(newImage);
}
afficheImg("papillon.jpg");

