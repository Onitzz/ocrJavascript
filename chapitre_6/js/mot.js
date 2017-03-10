var mot = prompt("Saisir un mot :");

console.log("La longueur du mot "+mot+" est de "+mot.length+ " caractère.");
console.log("Il s'écrit en minuscule "+ mot.toLowerCase());
console.log("Il s'écrit en majuscule "+ mot.toUpperCase());

var voy=0;
var cons=0;
var motMin=mot.toLowerCase();
for(i = 0 ;i < mot.length; i++){
  if((motMin[i]=== "a")||(motMin[i]=== "e")||(motMin[i]=== "i")||(motMin[i]=== "o")||(motMin[i] === "u")||(motMin[i] === "y")){
    voy++;
  }
  else {
    cons++;
  }
}

console.log(cons + " consone");
console.log(voy + " voyelle");

function inverser(mot){
  mot = mot.toLowerCase();
  var motInvert="";
  var palindrome=false;

  for(i = 0 ;i < mot.length; i++){
    motInvert += mot[mot.length - 1 - i];
  }
  if(motInvert===mot){
    palindrome=true;
  }
  return {motInvert,palindrome};
}
var invert=inverser(mot);
console.log("Inverser " + mot + " donne " + invert.motInvert);
if(invert.palindrome===true){
  console.log("Donc c'est un palindrome.");
}
else{
  console.log("Donc ce n'est pas un palindrome.");
}

function trouverLettreLeet(lettre){
  var letterLeet=lettre;
  switch (lettre) {
    case 'a':
      letterLeet="4";
      break;
    case 'b':
      letterLeet="8";
      break;
    case 'e':
      letterLeet="3";
      break;
    case 'l':
      letterLeet="1";
      break;
    case 'o':
      letterLeet="0";
      break;
    case 's':
      letterLeet="5";
      break;
    default:

  }
  return letterLeet;
}


function convertirEnLeetSpeak(mot){
  mot=mot.toLowerCase();
  var leetSpeak=""
  for(i = 0 ;i < mot.length; i++){
    leetSpeak += trouverLettreLeet(mot[i]);
  }
  return leetSpeak;
}

console.log("En leet Speak, " + mot + " s'écrit " + convertirEnLeetSpeak(mot));
