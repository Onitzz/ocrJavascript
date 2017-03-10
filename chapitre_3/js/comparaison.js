var nb1 = Number(prompt("Saisir le nombre 1 :"));
var nb2 = Number(prompt("Saisir le nombre 2 :"));
if (nb1 > nb2){
  console.log(nb1 + " est supérieur à " + nb2);
}
else if (nb1 == nb2) {
  console.log(nb1 + " est égal à " + nb2);
}
else {
  console.log(nb1 + " est inférieure à " + nb2);
}
