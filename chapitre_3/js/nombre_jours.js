var nummois = Number(prompt("Saisir le numéro du mois :"));
if ((nummois <= 0) || (nummois > 12)) {
  console.log("Ce n'est pas un numéro de mois !");
}
else{
  if ((nummois >= 1) && (nummois <= 7)){
    if ((nummois % 2) !== 0){
      console.log("Il y a 31 jour dans ce mois");
    }
    else if (nummois === 2){
      console.log("Il y a 28 jours dans ce mois");
    }
    else{
      console.log("Il y a 30 jour dans ce mois");
    }
  }
  else{
    if ((nummois % 2) !== 0){
      console.log("Il y a 30 jour dans ce mois");
    }
    else{
      console.log("Il y a 31 jour dans ce mois");
    }
  }
}
