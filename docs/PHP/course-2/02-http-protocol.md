---
title: "📜 | Anatomie du protocole HTTP"
---

:::info
Cette partie n'est pas à apprendre par cœur, mais elle constitue un élément principal de la compréhension du monde du WEB.
:::

Dans le cadre du développement web, le protocole **HTTP** (HyperText Transfer Protocol) joue un rôle central en permettant la communication entre les navigateurs web (clients) et les serveurs. Lorsqu'un utilisateur accède à une page web ou interagit avec une application en ligne, une série de requêtes et réponses HTTP sont échangées entre le client et le serveur. Comprendre l’anatomie d'une requête HTTP est essentiel pour diagnostiquer des problèmes, optimiser des applications web, et développer des services API efficaces.

## Les composantes d'une requête HTTP

Une requête HTTP se divise en plusieurs parties distinctes, chacune ayant un rôle spécifique.

Voici un diagramme pour faciliter la compréhension tout au long de l'explication :

![Schéma du protocole HTTP](../images/http_protocol.png)

### Ligne de requête (Request Line)

La ligne de requête est la première ligne de la requête HTTP. Elle contient trois informations clés :

- **Méthode HTTP** : elle spécifie l'action à réaliser sur la ressource demandée. Les méthodes les plus courantes sont :
    - `GET` : pour récupérer une ressource (lecture).
    - `POST` : pour envoyer des données au serveur (souvent pour créer ou mettre à jour une ressource).
    - `PUT` : pour remplacer ou mettre à jour une ressource existante.
    - `DELETE` : pour supprimer une ressource.
    - `PATCH` : pour mettre à jour partiellement une ressource.

- **URI (Uniform Resource Identifier)** : c’est l’adresse de la ressource demandée, souvent appelée chemin ou endpoint. Par exemple, `/articles/42` fait référence à l'article numéro 42.

- **Version du protocole HTTP** : généralement `HTTP/1.1` ou `HTTP/2`, cette information précise quelle version du protocole est utilisée.

**Exemple** :
```http
GET /articles/42 HTTP/1.1
```

### En-têtes de requête (Request Headers)

Les en-têtes de requête fournissent des informations supplémentaires sur la requête, telles que le type de contenu envoyé, les autorisations nécessaires, ou encore des informations sur le client. Chaque en-tête est une paire clé-valeur.

Les en-têtes courants incluent :

- **Host** : l’adresse du serveur (ex : `www.example.com`).
- **User-Agent** : informations sur le client, comme le type de navigateur utilisé.
- **Accept** : spécifie le type de contenu que le client peut accepter (ex : `text/html`, `application/json`).
- **Content-Type** : indique le type de données envoyées dans le corps de la requête (utile pour `POST` ou `PUT`, ex : `application/json`).
- **Authorization** : contient les informations d'authentification.

**Exemple** :
```http
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: application/json
```

### Corps de la requête (Request Body)

Le corps de la requête est une partie optionnelle qui contient les données envoyées au serveur, par exemple lors d'une requête `POST` ou `PUT`. Ces données peuvent être de divers formats (JSON, XML, formulaire encodé, etc). Pour une requête `GET`, le corps de la requête est généralement absent car les données sont passées dans l'URI (via des paramètres de requête).

**Exemple** (dans une requête `POST`) :
```json
{
  "title": "Nouvel Article",
  "content": "Contenu de l'article..."
}
```

## Le cycle d'une requête HTTP

Lorsque le client (le navigateur ou une application) envoie une requête HTTP, voici les étapes principales qui se déroulent :

1. **L'utilisateur interagit avec l'interface** (par exemple en cliquant sur un lien ou un bouton de soumission de formulaire).
2. **Le navigateur envoie une requête HTTP** au serveur spécifié, contenant la ligne de requête, les en-têtes et, dans certains cas, un corps de requête.
3. **Le serveur reçoit la requête**, l'interprète, et effectue les actions nécessaires (récupérer des données depuis une base, effectuer des calculs, etc.).
4. **Le serveur envoie une réponse HTTP** au client, contenant les données demandées ou un message d’erreur si la requête ne peut être traitée.
5. **Le navigateur affiche le résultat** à l'utilisateur sous forme de page web, d'alerte, ou toute autre représentation.

## Exemple complet d'une requête HTTP

Prenons un exemple où un utilisateur cherche à récupérer un article depuis un serveur via une requête `GET`.

### Requête HTTP
```http
GET /articles/42 HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: application/json
```

Ici, le client demande l'article numéro 42 au serveur `www.example.com`. Le client indique qu'il souhaite recevoir les données au format JSON grâce à l'en-tête `Accept`.

### Réponse HTTP du serveur
En retour, le serveur pourrait répondre avec :

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 126

{
  "id": 42,
  "title": "Nouvel Article",
  "content": "Voici le contenu de l'article."
}
```

Dans cet exemple :

- Le code de statut `200 OK` signifie que la requête a réussi.
- Le type de contenu est spécifié comme `application/json`, ce qui correspond à la demande du client.
- Le corps de la réponse contient les détails de l'article en format JSON.

## Les méthodes HTTP les plus courantes

Les méthodes HTTP, également appelées verbes HTTP, spécifient le type d'action à effectuer sur une ressource donnée. Voici un aperçu des méthodes les plus utilisées :

- **GET** : Utilisé pour récupérer des informations d'une ressource. Une requête `GET` ne devrait pas modifier l'état de la ressource.

- **POST** : Utilisé pour envoyer des données au serveur, par exemple pour créer une nouvelle ressource. Il est souvent utilisé pour soumettre des formulaires ou des données JSON.

- **PUT** : Utilisé pour remplacer entièrement une ressource existante avec les données fournies. Il s'agit d'une opération idempotente, ce qui signifie que l'application répétée de la requête ne modifie pas davantage la ressource.

- **PATCH** : Semblable à `PUT`, mais il est utilisé pour mettre à jour partiellement une ressource.

- **DELETE** : Utilisé pour supprimer une ressource sur le serveur.

## En-têtes importants dans une requête HTTP

Certains en-têtes jouent un rôle important dans le traitement des requêtes HTTP :

- **Cache-Control** : Gère le comportement de mise en cache des ressources. Par exemple, il peut indiquer au navigateur s’il doit stocker une copie de la ressource et pendant combien de temps.

- **Authorization** : Utilisé pour transmettre des informations d'authentification, comme un jeton d'accès dans les services sécurisés.

- **Cookie** : Utilisé pour stocker et envoyer des informations liées à une session utilisateur ou à des préférences sur le site web.