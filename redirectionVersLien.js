var compteur = 10; // Définissez la durée du compte à rebours en secondes

function demarrerCompteur() {
  if (compteur >= 0) {
    console.log("Temps restant : " + compteur + " secondes");
    compteur--;
    setTimeout(demarrerCompteur, 1000); // Appel récursif toutes les 1 seconde
  } else {
    console.log("Le compte à rebours est terminé !");
    // Une fois le compte à rebours terminé, sélectionnez l'élément du lien et simulez un clic.
    var lienSAbonner = document.querySelector('a.external[href="exemple.php"]');
    if (lienSAbonner) {
      lienSAbonner.click();
    }
  }
}

demarrerCompteur(); // Démarrez le compte à rebours
