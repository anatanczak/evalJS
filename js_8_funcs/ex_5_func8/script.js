function strtok(str1, str2, n) {
  if (!strtok.length == arguments.length) {
    console.log("number of arguments is not valid");
    return;
  }

  if (!typeof str1 === "string" || !str1 instanceof String) {
    console.log("str1 is not  string");
    return;
  }

  if (!typeof str2 === "string" || !str2 instanceof String) {
    console.log("str2 is not  string");
    return;
  }

  if (!Number.isInteger(n)) {
    console.log("n is not  an int");
    return;
  }

  var arrayOfWords = str1.split(str2);

  for (i = 0; i < arrayOfWords.length; i++) {
    if (i === (n - 1)) {
      console.log(arrayOfWords[i]);
    }
  }

}

strtok("aaa;zzz;eee;rrr;tttttt;yyyyy;ooooo", ";", 3)

alert("Cette exercice n'a pas d'interface c'est une simple fonction à tester avec la console")