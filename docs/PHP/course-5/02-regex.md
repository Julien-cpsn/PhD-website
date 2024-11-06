---
categories:
  - ⚙️ Cours pratique
---

#  ⚙️ | Regex

Les **expressions régulières** (Regex) sont des modèles de recherche avancés qui permettent de détecter, valider, extraire ou manipuler des chaînes de caractères. En PHP, elles sont couramment utilisées pour valider des formats de données, comme des adresses email, des numéros de téléphone, des codes postaux, etc.

Plein d'outils existent pour tester et formatter ses expressions regex avant de les utiliser dans son code, par exemple https://regex101.com/.

## Syntaxe des Expressions Régulières

Une expression régulière est constituée de **modèles** qui décrivent un motif de caractères à rechercher. Quelques éléments de syntaxe courants :
- `^` : Début de la chaîne
- `$` : Fin de la chaîne
- `.` : N’importe quel caractère
- `*` : 0 ou plusieurs répétitions du caractère précédent
- `+` : 1 ou plusieurs répétitions du caractère précédent
- `[]` : Classe de caractères (ex : `[a-z]` pour toutes les lettres minuscules)
- `\d` : Un chiffre
- `\w` : Un caractère alphanumérique

## Groupes de capture

Les **groupes de capture** en expressions régulières permettent de regrouper et d'extraire des sous-parties spécifiques d'une chaîne de caractères. Ils sont définis en entourant une partie de l'expression régulière entre parenthèses `( ... )`. Lorsqu'un modèle avec un groupe de capture est trouvé, le contenu entre parenthèses est sauvegardé et peut être récupéré séparément pour des traitements spécifiques. Par exemple, pour extraire le nom de domaine d'une adresse email, on pourrait utiliser l'expression régulière `/(.+)@(.+\..+)/`, où `( .+ )` capture tout ce qui précède le symbole `@` (l'identifiant), et `( .+\..+ )` capture le domaine.

Les groupes de capture sont également utiles pour **remplacer** certaines parties d'une chaîne avec `preg_replace()` en utilisant les références `$1`, `$2`, etc., qui correspondent aux groupes capturés, ce qui permet des manipulations de texte avancées.

### Exemples

- `/^\d{5}$/` : Correspond à un code postal français à 5 chiffres
- `/^[\w\-\.]+@[a-z]+\.[a-z]{2,4}$/` : Correspond à un format d'email simple

## Utilisation des Regex en PHP

PHP offre deux méthodes principales pour travailler avec les expressions régulières :

### **preg_match()**

`preg_match()` recherche un modèle dans une chaîne et retourne `true` si le modèle est trouvé.

**Exemple** : Validation d'un email
```php
$email = "exemple@test.com";
if (preg_match("/^[\w\-\.]+@[a-z]+\.[a-z]{2,4}$/", $email)) {
    echo "Email valide.";
} else {
    echo "Email invalide.";
}
```

En PHP, les groupes de capture peuvent être accédés grâce à la fonction `preg_match()`, qui stocke chaque groupe trouvé dans un tableau indexé. Voici un exemple :

```php
$email = "exemple@domaine.com";
preg_match("/(.+)@(.+\..+)/", $email, $matches);
echo "Identifiant : " . $matches[1]; // Affiche "exemple"
echo "Domaine : " . $matches[2]; // Affiche "domaine.com"
```

### **preg_replace()**

`preg_replace()` remplace toutes les occurrences d'un modèle par une autre chaîne.

**Exemple** : Masquer une partie d’un numéro de téléphone
```php
$telephone = "0123456789";
$masque = preg_replace("/\d{6}$/", "******", $telephone);
echo $masque;  // Affiche "0123******"
```

### **preg_split()**
`preg_split()` divise une chaîne en un tableau selon un modèle.

**Exemple** :
```php
$phrase = "Bonjour, comment ça va ?";
$mots = preg_split("/[\s,]+/", $phrase);
print_r($mots);  // Sépare les mots en un tableau
```