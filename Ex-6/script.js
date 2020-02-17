//jshint esversion: 6
var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

let name;

//get the name
do{
name = prompt("Entrez un prénom");
} while (name === "");

//check if it's not nill and if array includes it
if (name != null && tab.includes(name)) {

tab.forEach((item, index)=> {

if (item === name) {

  tab.splice(index, 1);
  //strange thing to do but it's a task
tab.length = tab.length + 1;
}
  console.log(tab);
});
} else {
  console.log("name is null");
}
