# compte-a-rebours-avec-redirection-de-lien

Vous pouvez utiliser l'un de ces scripts pour simuler des interactions utilisateur sur des pages web en cliquant automatiquement sur des boutons ou des liens après un certain délai. Bien qu'il puisse être utilisé dans la console pour des tests rapides ou pour effectuer des actions sur une page web spécifique, il peut également être intégré dans le code source d'une page web pour automatiser des actions côté client.

*Pour le script redirectionVersLien.js :* 

Ce code JavaScript commence par définir une variable compteur avec une valeur de 10, représentant la durée d'un compte à rebours en secondes. Ensuite, une fonction nommée demarrerCompteur() est déclarée. Cette fonction récursive vérifie si le compteur est supérieur ou égal à zéro. Si c'est le cas, elle affiche le temps restant dans la console, décrémente le compteur d'une seconde et planifie un appel récursif à elle-même après une seconde. Lorsque le compteur atteint zéro, elle affiche un message indiquant que le compte à rebours est terminé.

Après le compte à rebours terminé, le code sélectionne un élément de lien dans la page avec la classe "external" et un attribut href égal à "exemple.php". Si un tel élément est trouvé, il simule un clic sur ce lien.

En résumé, ce code exécute un compte à rebours de 10 secondes, puis déclenche un clic automatique sur un lien spécifique de la page une fois le compte à rebours terminé.

*Pour le scriptscriptClicSurBoutonParTexte.js :*

Vous pouvez personnaliser la valeur de boutonTexte pour correspondre au texte du bouton que vous souhaitez rechercher automatiquement. 

Ce code recherche tous les liens avec la classe "external" et clique sur le premier lien qui a le texte correspondant. Si le bouton n'est pas trouvé, il affiche un message dans la console.
