var heure = Number(prompt("Saisir l'heure (exemple: pour 12h34 et 22s => saisir '12') :"));
var minute = Number(prompt("Saisir la minute :"));
var seconde = Number(prompt("Saisir la seconde :"));

var hmax = 23;
var mmax = 59;
var smax = 59;

if((heure >= 24) || (minute >= 60) || (seconde >= 60) || (heures < 0) || (minute < 0) || (seconde < 0)){
  console.log("Saisie trop élevé !");
}
else{
  if(seconde === smax){
    if(minute === mmax){
      if(heure === hmax){
        console.log("Dans une seconde il sera minuit !");
      }
      else{
        console.log("Dans une seconde il sera" + (heure + 1) + "h" + 0 + "m" + 0 + "s");
      }
    }
    else{
      console.log("Dans une seconde il sera" + heure + "h" + (minute + 1) + "m" + 0 + "s");
    }
  }
  else{
    console.log("Dans une seconde il sera" + heure + "h" + minute + "m" + (seconde + 1) + "s");
  }
}
