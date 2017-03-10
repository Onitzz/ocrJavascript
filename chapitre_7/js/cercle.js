var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle= {};
cercle.perimetre = function(rayon){
  return 2 * Math.PI * rayon;
};
cercle.aire = function(rayon){
  return Math.PI * rayon * rayon;
}

console.log("Son périmètre vaut " + cercle.perimetre(r));
console.log("Son aire vaut " + cercle.aire(r));
