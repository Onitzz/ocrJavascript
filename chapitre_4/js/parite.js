var nombresaisie = Number(prompt("Saisir un nombre :"))

for (var i = nombresaisie; i <= nombresaisie + 9; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    }
    else{
      console.log(i + " est impair");
    }
}
