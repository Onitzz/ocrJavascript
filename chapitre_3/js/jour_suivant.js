var jour = prompt("Saisir le jour :").toLowerCase();

switch (jour) {
case "lundi":
  console.log("le nom du jour est lundi");
  break;
case "mardi":
  console.log("le nom du jour est mardi");
  break;
case "mercredi":
  console.log("le nom du jour est mercredi");
  break;
case "jeudi":
  console.log("le nom du jour est jeudi");
  break;
case "vendredi":
  console.log("le nom du jour est vendredi");
  break;
case "samedi":
  console.log("le nom du jour est samedi");
  break;
case "dimanche":
  console.log("le nom du jour est dimanche");
  break;
default:
  console.log("Ce n'est pas un jour de la semaine !");
}
