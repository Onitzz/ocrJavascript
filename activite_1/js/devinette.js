/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var nombreSaisi = 150;

for (var i = 0; i < 6; i++) {
  nombreSaisi = Number(prompt("Saisir le nombre :"));
  if(nombreSaisi < solution){
    console.log(nombreSaisi + " est trop petit !");
  }
  else if (nombreSaisi > solution){
    console.log(nombreSaisi + " est trop grand !");
  }
  else {
    console.log("Bravo, la solution est bien " + nombreSaisi);
  }
  if(nombreSaisi !== solution){
    console.log("Il vous reste " + (5 - i) + "tours !" );
  }
  else{
    i = 10;
  }
}
if (nombreSaisi !== solution) {
  console.log("Dommage le compte à rebours est terminé :°( ");
  console.log("La solution était " + solution);
}
