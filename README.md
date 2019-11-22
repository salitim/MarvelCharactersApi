# MarvelCharactersApi
MarvelCharactersApi est en mode "Single page application". l'application est responsive(consultable sur smartphone et tablette).

Prérequis:
Windows.
Activer les cookies du navigateur(Chrome ou Firefox).
Serveur: Wamp(ou autres ex: lamp)
php 5 ou 7.

Utilisation:
Placer les fichiers dans un dossier nommé "ApiMarvel".
Le dossier est à placer dans le dossier "www" du dossier "Wamp" sur votre disque dur(Par défaut C:\wamp6\www). 
Lancer le serveur Wamp.
Ouvrir CHrome ou firefox. Rentrer l'adresse : http://localhost:80/ApiMarvel/

Vous pouvez désormais utiliser l'application!
Cliquer sur le nom du personnage afin d'avoir les détails.
La pagination est possible avec les boutons "next" et "previous".

Performance:
Le fait d'utiliser Vanilla JS permet d'avoir des performances plus hautes qu'un Framework.
J'ai utilisé php mais node.js aurait peu être accéléré le transfert de la clé hashé(sans passer par un cookie).
Amélioration possible : mise en place de la POO.

Test:
J'ai effectué des tests en direct de fonctionnement et de comportement de l'application. Comme si j'étais un utilisateur lambda.
L'utilisation de console.log m'a permis de lire et de récupérer certaines erreurs.
J'ai codé quelques tests dans le cas de l'utilisation de l'outil jasmine.
