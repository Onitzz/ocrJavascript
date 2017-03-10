function hazardfunct(){
  var prenomeleve = [
  "Alexandre",
  "Céline",
  "Charlotte",
  "David",
  "Edwina",
  "Enzo",
  "Florian",
  "Jérémy",
  "Julien",
  "Kévin",
  "Loïc",
  "Marion",
  "Matéo",
  "Romain"
  ];
  var p = document.getElementById('prenom');
  var popotier = Math.round((Math.random() * 13));
  p.textContent = prenomeleve[popotier];
}
