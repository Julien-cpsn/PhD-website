---
title: Séance 1 - Introduction
---

## Présentation de la matière et des objectifs

a

## Introduction à PHP

- PHP acronyme de "PHP: Hypertext Preprocessor"
- Conçu pour un usage WEB
- Scripting (=/= programmation, des petits fichiers pour des petites actions)
- Interprété (=/= compilé)
- Multi-plateforme comme Java
- Programmation Orienté Object
- Typé de manière souple (Weakly typed)
- Seulement côté serveur

- Première version en 1995
- Actuellement en 8.3.9
- Ecrit en C

### Coder en PHP

[Documentation](https://www.php.net/manual/fr/)

- Extension ".php"
- Les variables ont toutes un `$`, ex: `$ma_var`
- Point virgule à la fin des lignes
- Convention de nommage snake_case, ex `ma_super_fonction` 
- Tous les fichiers commencent avec `<?php`, et peuvent finir par `?>`

### Différences de PHP

#### Echo

Print avec `echo` (ne pas oublier d'ajouter un `\n`, car il ne retourne pas à la ligne)

```php
$ma_var = 5;
echo $ma_var;
echo "Salut c'est $ma_var\n";
```

#### Debug

Debugguer une variable avec `var_dump()`. Cela permet d'afficher le contenu complet de la variable au moment où est appelée la fonction pour régler d'éventuels problèmes.

```php
$ma_var = 5;
var_dump($ma_var);
```

#### For each

Le `for each` ("pour chaque")

```php
$ma_var = [1, 2, 3, 4];

foreach ($ma_var as $var) {
    echo "$var\n";
}
```

#### Match

Plus récent, le `match`

```php
$ma_var = 2;

$mon_autre_var = match ($ma_var) {
    1, 2 => "toto",
    $ma_var > 10 => "tata",
    default => "cas par défaut"
};
```

#### Tableaux associatifs

Pour créer des tableaux avec des index personnalisés (comme un dictionnaire)

```php
$ma_var = [
    0 => "toto",
    "mon index 1" => "tata",
    "mon autre index" => "tonton" 
];
```

#### Ajouter des strings

Pour ajouter/concatener des strings en PHP, on utilise l'opérateur `.`

```php
echo "mon string 1" . "mon string 2";
```

## TD 1 : Premiers scripts

Lancer le serveur

```shell
php -S localhost:8080
```

## Fonctions utilitaires & autres outils

d

## TD 2 : XXXX