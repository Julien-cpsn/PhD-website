---
categories:
- 📜 Cours théorique
---

# 📜 | Qu'est-ce qu'une API

:::info
Cette partie n'est pas à apprendre en détails. Cependant, **la compréhension des différents termes évoqués est nécessaire**.
:::

## API

Une **API** (Interface de Programmation d'Application) est un ensemble de règles et de conventions qui permet à différentes applications ou services de communiquer entre eux. Les API sont devenues une composante essentielle du développement logiciel moderne, permettant aux applications d'interagir avec des services web, des bases de données, ou même d'autres applications. Elles standardisent les échanges de données, facilitant ainsi l'intégration et l'extension des fonctionnalités.

:::info
Une API est côté serveur (back-end).
:::

### Qu'est-ce qu'une API ?

Une API définit des **points d'entrée** (endpoints ou URL) que d'autres applications peuvent utiliser pour interagir avec un service donné. Lorsqu'une application envoie une requête à une API, elle reçoit une réponse structurée, généralement au format **JSON** ou **XML**, contenant les données demandées ou un message de statut.

### **API REST (Representational State Transfer)**

REST est un style d'architecture qui repose sur des méthodes HTTP standards telles que `GET`, `POST`, `PUT`, `DELETE`, etc. Les données sont généralement échangées au format **JSON** ou **XML**.

**Caractéristiques** :
    - **Stateless** : Chaque requête contient toutes les informations nécessaires, sans dépendre d'un état stocké côté serveur.
    - **Scalabilité** : Très flexible et évolutif, REST est largement utilisé pour les services web modernes.

**Exemple** :
```http
GET /utilisateurs/42
```
Ce type de requête renverrait des informations sur l'utilisateur avec l'ID 42.

Il est aussi possible de représenter une API REST sous forme d'arbre, tel que voici :

![rest_api.png](../resources/rest_api.png)