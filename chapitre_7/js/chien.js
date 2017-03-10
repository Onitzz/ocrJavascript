// TODO : ajoutez ici la définition de l'objet chien
var chien= {
  nom : "Joyce",
  race : "Chihuahua",
  taille : "30",
  aboyer:function (){
    return "Piou, piou !";
  },
};
console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());
