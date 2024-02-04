# compte-a-rebours-avec-redirection-de-lien

Ce code JavaScript commence par définir une variable compteur avec une valeur de 10, représentant la durée d'un compte à rebours en secondes. Ensuite, une fonction nommée demarrerCompteur() est déclarée. Cette fonction récursive vérifie si le compteur est supérieur ou égal à zéro. Si c'est le cas, elle affiche le temps restant dans la console, décrémente le compteur d'une seconde et planifie un appel récursif à elle-même après une seconde. Lorsque le compteur atteint zéro, elle affiche un message indiquant que le compte à rebours est terminé.

Après le compte à rebours terminé, le code sélectionne un élément de lien dans la page avec la classe "external" et un attribut href égal à "exemple.php". Si un tel élément est trouvé, il simule un clic sur ce lien.

En résumé, ce code exécute un compte à rebours de 10 secondes, puis déclenche un clic automatique sur un lien spécifique de la page une fois le compte à rebours terminé.
