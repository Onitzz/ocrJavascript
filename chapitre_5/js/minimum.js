// TODO : écrire la fonction min()
function min(nb1, nb2){
  var min = nb1;
  if(nb1 > nb2){
    min = nb2;
  }
  return min;
}

console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1
