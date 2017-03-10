var rayonSaisi = Number(prompt("Saisir le rayon :"));

function perimetre(rayon){
  var result = 2 * Math.PI * rayon;
  return result;
}

function aire(rayon){
  var result = Math.PI * rayon * rayon;
  return result;
}

console.log("Le périmetre d'un cercle de rayon "+ rayonSaisi +" est de " + perimetre(rayonSaisi) + " et son aire est de " + aire(rayonSaisi));
