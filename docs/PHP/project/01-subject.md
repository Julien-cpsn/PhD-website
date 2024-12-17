# Sujet

Règles générales :
- Duo ou trio
- Rendu sur GitHub et Dockerhub

## Réseau social pour sportifs

Ce projet vise à développer un réseau social pour les sportifs.

### Cas d'usages

- Chaque utilisateur peut :
  - Rédiger des posts 
  - Sélectionner des sports qui l'intéressent
  - Chercher et rejoindre une équipe
  - Chercher et suivre (follow) des joueurs
  - Voir un feed
- Le feed contiendra :
  - Les évènements à venir
  - Les résultats des matchs passés
- Les types d'évènements sont :
  - Tournois (lié à des teams)
  - Entrainement (lié à des joueurs)
  - Conférence (lié à des joueurs)
- Certains utilisateurs sont admins et ont accès à un panneau d'administration permettant de visualiser et modifier les éléments de la base de données (laravel Backpack par exemple).

### Features attendues

- Authentification (Breeze, Jetstream ou sanctum)
- Recherche full-text pour les team, évènements, utilisateurs (Scout)
- Reporting journalier des évènements au format CSV (task scheduling + job + file storage)