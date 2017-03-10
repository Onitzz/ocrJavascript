var mot = "";
var mots=[];
while (mot !== "stop"){
  mot = prompt("Saisir un mot (arreter la saisie en tapant 'stop'):");
  mots.push(mot);
}

mots.forEach(function(mot){
  console.log(mot);
});
