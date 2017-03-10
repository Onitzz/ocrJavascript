// Renvoie un message de bienvenue
var prenomSaisi = prompt("Votre prénom :");
var nomSaisi = prompt("Votre nom :");

function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

console.log(direBonjour(prenomSaisi,nomSaisi));

// TODO : faire saisir le prénom et le nom de l'utilisateur
// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat
