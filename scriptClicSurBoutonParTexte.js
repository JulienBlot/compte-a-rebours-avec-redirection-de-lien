var compteur = 10; // Définissez la durée du compte à rebours en secondes
var boutonTexte = "Test"; // Texte du bouton que vous souhaitez rechercher

function demarrerCompteurEtClic() {
  if (compteur >= 0) {
    console.log("Temps restant : " + compteur + " secondes");
    compteur--;
    setTimeout(demarrerCompteurEtClic, 1000); // Appel récursif toutes les 1 seconde
  } else {
    console.log("Le compte à rebours est terminé !");
    
    // Recherchez automatiquement le bouton en fonction de son texte
    var bouton = rechercherBoutonParTexte(boutonTexte);
    
    if (bouton) {
      bouton.click();
    } else {
      console.log("Bouton non trouvé avec le texte : " + boutonTexte);
    }
  }
}

function rechercherBoutonParTexte(texte) {
  var boutons = document.querySelectorAll('a.external');
  for (var i = 0; i < boutons.length; i++) {
    if (boutons[i].textContent.trim() === texte) {
      return boutons[i];
    }
  }
  return null;
}

demarrerCompteurEtClic(); // Démarrez le compte à rebours et recherchez le bouton
