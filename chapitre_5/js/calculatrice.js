// TODO : écrire la fonction calculer()

function calculer(nb1,signe,nb2){
  var calc = 0;
  switch (signe) {
    case '+':
      calc = nb1 + nb2;
      break;
    case '*':
      calc = nb1 * nb2;
      break;
    case '-':
      calc = nb1 - nb2;
      break;
    case '/':
      calc = nb1 / nb2;
      break;
    default:
    calc = "Erreur"
  }
  return calc;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity
