# Préambule

Ce cours vise à enseigner le langage de programme PHP et le framework Laravel aux étudiants en 2ème année de BUT Informatique en parcours DACS de l'IUT Lyon1.

## Déroulement

> :::warning
> Les versions de PHP et Laravel utilisées sont respectivement : **PHP 8.2** et **Laravel 11**

### Séance 1 - Introduction

- Présentation de la matière et des objectifs
- Introduction à PHP
- TD 1 : Premiers scripts
- Fonctions utilitaires & autres outils
- TD 2 : Utilitaires & outils

### Séance 2 - Front-end

- Introduction aux concepts de stack WEB (front-end, back-end, base-de-données)
- Protocole HTTP(S)
- JSON
- Variables prédéfinies
- TD : Gérer un formulaire
- TD : Page de profil utilisateur

### Séance 3-4 (2 séances) - Back-end 

- Introduction aux concepts d'API
- TP : Serveur HTTP basique
  - Routing

### Séance 5 - Front-end

- Introduction de la logique de composants
- Présentation de diverses technologies front-end
- TP : Moteur de templating

### Séance 6-7 (2 séances) - Intéraction base-de-données

- Introduction à PDO
- TP : Requêtes basiques
- Introduction au concept d'ORM
- TP : ORM minimaliste

### Séance 8 - Introduction à la sécurité

- Introduction à la cyber-sécurité (injection SQL, XSS, man in the middle, DDoS)
- TP : Challenges "root-me" like

### Séance 9 - Framework

- Introduction au concept de framework
- TP : Créer son propre framework minimaliste en assemblant les parties précédentes
  - Features attendues :
    - Routing
    - Moteur de templating
    - Mini-ORM
    - Configuration utilisateur (host, port, bdd)
  - Le moins de failles de sécurité possible

### Séance 10 - Laravel 

- Mini exposé : Chaque élève présente un élément de l'écosystème Laravel (description, exemples d'usage, complexité, popularité, prix, fiabilité)
- Introduction au concept de package manager et composer
- Introduction à Laravel (routing, controllers, requests/responses, validation, migrations, seeding, commands, jobs), présentation de la documentation et de l'écosystème
- TP : Création d'un projet Laravel vide

### Séance 11-20 (10 séances) - Projet noté

## Objectifs pédagogiques

> :::info
> Extrait du programme national de BUT Informatique (2022) - [PDF](https://www.enseignementsup-recherche.gouv.fr/sites/default/files/annexe-2-licence-professionnelle-bachelor-universitaire-de-technologie-informatique-29016.pdf)

### Développement WEB

> 1.3.1 - page 182

**Compétences ciblées :**

- Développer – c’est-à-dire concevoir, coder, tester et intégrer – une solution informatique pour un client.
- Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d’exécution, précision, consommation de ressources..
- Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d’une organisation
- Concevoir, gérer, administrer et exploiter les données de l’entreprise et mettre à disposition toutes les informations pour un bon pilotage de l’entreprise SAÉ au sein de laquelle la ressource peut être mobilisée et combinée :
- SAÉ 3.Deploi.01 | Création et déploiement de services applicatifs

**Descriptif :**

L’objectif de cette ressource est de poursuivre l’apprentissage de la programmation autour de technologies web. Cette ressource
met en situation de développement à partir de spécification, ce qui est la suite logique de l’apprentissage du développement.
Savoirs de référence étudiés
- Programmation web (par ex. : côté client ou côté serveur, gestion des contextes, authentifications, services web...)
- Sensibilisation à la sécurité web (par ex. : injection, filtrage...)
- Sensibilisation à la sécurité des applications (par ex. : encodage des mots de passe, typage des saisies...)

**Prolongements suggérés**
- Initiation aux patrons d’architectures (par ex. : MVC...)

**Apprentissages critiques ciblés :**
- AC21.01 | Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences
- AC21.02 | Appliquer des principes d’accessibilité et d’ergonomie
- AC21.03 | Adopter de bonnes pratiques de conception et de programmation
- AC22.03 | Comprendre les enjeux et moyens de sécurisation des données et du code
- AC23.03 | Sécuriser les services et données d’un système
- AC24.03 | Organiser la restitution de données à travers la programmation et la visualisation
- AC24.04 | Manipuler des données hétérogènes

**Mots clés :** Programmation web – Spécifications – Sécurité

**Volume horaire :** Volume horaire défini nationalement : 26 heures dont 20 heures de TP

### Architecture logicielle

> 2.3.1 - Page 204

Compétences ciblées :
- Développer — c’est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.
- Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d’une organisation
- Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique SAÉ au sein de laquelle la ressource peut être mobilisée et combinée :
- SAÉ 4.Deploi.01 | Déployer et sécuriser des services dans un réseau

**Descriptif :**
L’objectif de cette ressource est de présenter des composants de la programmation qui peuvent être utilisés dans plusieurs
domaines.

**Savoirs de référence étudiés**
- Patrons d’architecture (par ex. : MVC, MVVM...)
- Utilisation de briques logicielles, d’interfaces de programmation, de bibliothèques tierces
- Développement de services web

**Prolongements suggérés**
- Utilisation de services web (par ex. : requêtes asynchrones, formats d’échange de données...)
- Organisation de l’accès aux données : base de données, annuaires, services Web...

**Apprentissages critiques ciblés :**
- AC21.01 | Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences
- AC21.02 | Appliquer des principes d’accessibilité et d’ergonomie
- AC21.03 | Adopter de bonnes pratiques de conception et de programmation
- AC23.01 | Concevoir et développer des applications communicantes
- AC26.02 | Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation

**Mots clés :** Services web – Bibliothèques – Patrons d’architecture – Accès aux données

**Volume horaire :** Volume horaire défini nationalement : 32 heures dont 16 heures de TP
