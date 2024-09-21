---
categories:
- ⚙️ Cours pratique
---

# ⚙️ | Variables prédéfinies

https://www.php.net/manual/fr/reserved.variables.php

https://www.php.net/manual/fr/language.variables.scope.php

En PHP, certaines **variables prédéfinies** sont disponibles à tout moment et facilitent la gestion des interactions entre le serveur, le client, et l'environnement d'exécution. Parmi ces variables, on trouve les **superglobales** et d'autres variables spécifiques.

### Les superglobales

Les superglobales sont des tableaux associatifs qui contiennent des informations relatives à l'environnement d'exécution, aux requêtes HTTP, aux fichiers téléchargés, etc. Elles sont accessibles partout dans le script, sans besoin de les passer en argument.

<details>
    <summary>**$GLOBALS**</summary>

Contient toutes les variables globales du script.

</details>

<details>
    <summary>**$_SERVER**</summary>

Informations sur le serveur et l'environnement (ex. : `$_SERVER['HTTP_HOST']` pour le nom de l'hôte).
</details>

<details>
    <summary>**$_GET**</summary>

Contient les données envoyées via une requête HTTP GET (ex. : depuis une URL).

**URL** : `http://example.com/page.php?nom=toto&age=30`

```php
echo "Nom : " . $_GET['nom'];
echo "Âge : " . $_GET['age']; 
```

<details>
    <summary>🖥️ Sortie</summary>
```
Nom : toto
Âge : 30
```
</details>
</details>

<details>
    <summary>**$_POST**</summary>

Contient les données envoyées via une requête HTTP POST (ex. : depuis un formulaire).

```html
<form method="post" action="/traitement.php">
    <input type="text" name="prenom" placeholder="Votre prénom">
    <input type="submit" value="Envoyer">
</form>
```

```php
// Affiche le prénom envoyé via le formulaire
echo "Prénom : " . $_POST['prenom'];
```
</details>

<details>
    <summary>**$_FILES**</summary>

Contient les fichiers téléchargés via un formulaire.

```html
<form action="/upload.php" method="post" enctype="multipart/form-data">
    <input type="file" name="mon_fichier">
    <input type="submit" value="Uploader">
</form>
```

```php
// Pas d'erreur
if ($_FILES['mon_fichier']['error'] === UPLOAD_ERR_OK) {
    $nom_du_fichier = $_FILES['mon_fichier']['name'];
    $nom_temporaire = $_FILES['mon_fichier']['tmp_name'];
    move_uploaded_file($nom_temporaire, "uploads/$nom_du_fichier");
}
// Une ou plusieurs erreurs
else {
    echo "Erreur lors du téléchargement.";
}
```

Voir la [liste des erreurs d'upload de fichiers](https://www.php.net/manual/fr/features.file-upload.errors.php).
</details>

<details>
    <summary>**$_COOKIE**</summary>

Contient les cookies envoyés par le client.

```php
setcookie('utilisateur', 'toto', time() + 3600);

if (isset($_COOKIE['utilisateur'])) {
    echo 'Utilisateur : ' . $_COOKIE['utilisateur'];
}
```

<details>
    <summary>🖥️ Sortie</summary>
```
Utilisateur : toto
```
</details>
</details>

<details>
    <summary>**$_SESSION**</summary>

Les sessions permettent de conserver des informations d’un utilisateur entre différentes pages.

- **session_start()** : Doit être appelée pour initialiser la session.
- **session_destroy()** : Permet de détruire toutes les variables de session.

**Exemple** :
```php
// Démarrer la session
session_start();

// Stocker des données dans la session
$_SESSION['utilisateur'] = 'toto';

// Accéder à la donnée
echo "Utilisateur : " . $_SESSION['utilisateur'];

// Détruire la session
session_destroy();
```
<details>
    <summary>🖥️ Sortie</summary>
```
Utilisateur : toto
```
</details>
</details>

<details>
    <summary>**$_REQUEST**</summary>

Combine les données de `$_GET`, `$_POST`, et `$_COOKIE`.
</details>

<details>
    <summary>**$_ENV**</summary>

Contient les variables d'environnement du serveur.

```php
echo $_ENV['HOME'];
```

<details>
    <summary>🖥️ Sortie</summary>
```
/home/toto
```
</details>
</details>

### Les autres variables prédéfinies

<details>
    <summary>**$argc**</summary>

Contient le nombre d'arguments passés au script via la ligne de commande (comme en C).
</details>

<details>
    <summary>**$argv**</summary>

Contient un tableau des arguments passés via la ligne de commande (comme en C).
</details>
