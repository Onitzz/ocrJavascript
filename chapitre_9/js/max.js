var valeurs = [11, 3, 7, 2, 99, 10];

var max = 0;
valeurs.forEach(function(valeur){
  if(valeur > max){
    max = valeur;
  }
});

console.log("La valeur maximal du tableau est " + max);
