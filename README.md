VOICI L'EXECUTION EN LOCAL

##

- Clonez le dépôt distant : `git clone https://github.com/enzo-mir/todo_blanks.git`
- Se situer dans le dossier "todo_blanks" : `cd todo_blanks_update`
- Installez les dépendances :`pnpm i`
- Configurez le mode de connexion à la base de données : `node ace configure @adonisjs/lucid`
- Choisir le moteur de base de données `SQLlite`
- Migrez le schéma de la base de données situé dans ~/database/migrations/1696524844429_todo_blanks.ts : `node ace migration:run`
- Lancez le serveur : `pnpm run dev`
- Ouvrir un onglet de naviguation à l'Url : (http://127.0.0.1:3333) 

SPÉCIFICATION

##
- Durée => ~5h
- Difficultées : 
    - typage "app/Controller/Http/PostsController"
    - template edge et gérer les évenements js "resources/views/welcome.edge" (exemple : utiliser `location.href` pour rediriger l'utilisateur à l'écoute d'un event )
- Nouveau : 
    - Modèle MVC mieux respecté
    - Modèle de BDD
    - Composants edge
    - Filtre des status : "en cours" ou "à faire"

