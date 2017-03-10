
var compte = {
  titulaire : "Alex",
  solde : 0,
  crediter : function(montant){
    this.solde += montant;
  },
  debiter : function(montant){
    this.solde -= montant;
  },
  decrire : function(){
    return  this.titulaire + ", solde : " + this.solde;
  },
};

console.log(compte.decrire());

var montant = Number(prompt("Montant à crediter :"));
compte.crediter(montant);

var montant = Number(prompt("Montant à debiter :"));
compte.debiter(montant);

console.log(compte.decrire());
