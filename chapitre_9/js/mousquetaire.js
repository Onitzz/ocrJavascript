
var mousquetaires = ["Athos", "Porthos", "Aramis"];

console.log("Voici les trois mousquetaires !");
for (var i = 0; i < 3; i++) {
  console.log(mousquetaires[i]);
}

mousquetaires.push("d'Artagnan");
console.log("A présent il sont quatres !");
mousquetaires.forEach(function (mousquetaire){
  console.log(mousquetaire);
});
