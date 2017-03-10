var table = Number(prompt("Quelle table de multiplication voullez vous afficher ? "));
console.log("table de " + table);

for (var i = 0; i < 11; i++) {
  console.log(table + " x " + i + " = " + (table * i));
}
