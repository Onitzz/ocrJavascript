var moy = Number(prompt("Saisir votre moyenne au bac :"));

if ((moy>= 0) && (moy < 10)) {
    console.log("Désolé mais, vous êtes recalé ..");
}
else if (moy < 12) {
    console.log("Bravo, vous avez votre Bac !");
}
else if ((moy >= 12) && (moy <= 20)){
    console.log("Félicitation, vous avez le bac avec mention !");
}
else{
    console.log("La note doit etre comprise entre 0 et 20.");
}
