# 📜 | Le JSON

:::info
Cette partie n'est pas à apprendre par cœur, mais elle constitue un élément principal de la compréhension du monde du WEB. **La compréhension des différents termes évoqués est nécessaire**.
:::

Le **JSON** (JavaScript Object Notation) est un format léger de données largement utilisé pour échanger des informations entre les systèmes, en particulier dans les applications web.
Il est à la fois facile à lire pour les humains et simple à interpréter pour les machines.
Le JSON est directement dérivé de la notation des objets du langage JavaScript. Ainsi le JSON est directement utilisable dans du code JavaScript et inversement.
Bien qu'il soit dérivé de la syntaxe de JavaScript, il peut être utilisé avec de nombreux langages de programmation comme Python, Java, PHP, ou encore Go.

### Pourquoi utiliser JSON ?

<details>
  <summary>**Lisibilité**</summary>

Le JSON est encodé en UTF-8 (c'est-à-dire pas en bytes comme 0xf6 0x3a). Sa syntaxe claire le rend facile à lire pour les humains.
</details>

<details>
  <summary>**Simplicité**</summary>

Moins verbeux que le XML, il est plus léger en termes de taille.

:::tip Le XML pour les curieux
```xml
<?xml version="1.0" encoding="UTF-8"?>

<shiporder orderid="889923" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="shiporder.xsd">
  <orderperson>John Smith</orderperson>
  <shipto>
    <name>Ola Nordmann</name>
    <address>Langgt 23</address>
    <city>4000 Stavanger</city>
    <country>Norway</country>
  </shipto>
  <item>
    <title>Empire Burlesque</title>
    <note>Special Edition</note>
    <quantity>1</quantity>
    <price>10.90</price>
  </item>
  <item>
    <title>Hide your heart</title>
    <quantity>1</quantity>
    <price>9.90</price>
  </item>
</shiporder>
```
:::
</details>

<details>
  <summary>**Compatibilité**</summary>

JSON est pris en charge nativement par la plupart des langages de programmation modernes, facilitant ainsi son adoption dans divers contextes.
</details>

<details>
  <summary>**Échanges avec les API**</summary>

JSON est devenu le standard pour échanger des données dans les API web modernes.
</details>

### Structure du JSON

Le JSON se compose de deux structures principales, les objets et les tableaux.

#### Objets

Les objets sont des collections de paires clé-valeur, entourées d'accolades `{}`. Chaque clé est une chaîne de caractères (texte) et est suivie d'une valeur (qui peut être de différents types).

Exemple d'un objet JSON :
```json
{
  "nom": "Dupont",
  "age": 30,
  "estMembre": true
}
```

#### Tableaux

Les tableaux sont des listes ordonnées de valeurs, entourées de crochets `[]`. Les éléments du tableau peuvent être de différents types : objets, chaînes de caractères, nombres, booléens, ou même d'autres tableaux.

Exemple d'un tableau JSON :
```json
[
  "Paris",
  "Londres",
  "Tokyo"
]
```

### Types supportés

Les types de données pris en charge par JSON sont :

- **Chaînes de caractères** (string) : entourées de guillemets doubles `""` (ex : `"nom" : "Dupont"`).
- **Nombres** (int, float) : entiers ou décimaux sans guillemets (ex : `"age": 30`, `"taille": 1.80`).
- **Booléens** : valeurs logiques `true` ou `false` (ex : `"estMembre": true`).
- **Null** : pour indiquer l'absence de valeur (ex : `"adresse": null`).
- **Objets** : collections de paires clé-valeur, entourées d'accolades `{}`.
- **Tableaux** : listes ordonnées, entourées de crochets `[]`.

### Exemples d'utilisation

JSON est principalement utilisé pour échanger des données entre un **client** (comme un navigateur) et un **serveur** dans des applications web. Par exemple, une API pourrait renvoyer les informations d’un utilisateur sous forme de JSON lorsqu'une requête est effectuée.

**Exemple d'une réponse JSON d'une API** :
```json
{
  "utilisateur": {
    "id": 123,
    "nom": "Dupont",
    "email": "dupont@example.com"
  },
  "status": "success"
}
```

### ⚙️ | Encoder et décoder du JSON en PHP

#### json_encode

Retourne la représentation JSON en string d'une valeur.

```php
$ma_var = [
    "utilisateur" => [
        "id" => 123,
        "nom" => "Dupont",
        "email" => "dupont@example.com"
    ],
    "status" => "success"
];

echo json_encode($ma_var);
```

<details>
    <summary>🖥️ Sortie</summary>
```json
{"utilisateur":{"id":123,"nom":"Dupont","email":"dupont@example.com"},"status":"success"}
```
</details>

#### json_decode

Décode un string content JSON en une variable PHP.

```php
$mon_json = '{"utilisateur":{"id":123,"nom":"Dupont","email":"dupont@example.com"},"status":"success"}';

$ma_var = json_decode($mon_json);

var_dump($ma_var);
```

<details>
    <summary>🖥️ Sortie</summary>
```
object(stdClass)#2 (2) {
  ["utilisateur"]=>
  object(stdClass)#1 (3) {
    ["id"]=>
    int(123)
    ["nom"]=>
    string(6) "Dupont"
    ["email"]=>
    string(18) "dupont@example.com"
  }
  ["status"]=>
  string(7) "success"
}
```
</details>