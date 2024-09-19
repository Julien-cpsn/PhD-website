---
categories:
- ⚙️ Cours pratique
---

# ⚙️ | Fonctions utilitaires & autres outils

## Utilitaires pour les string (chaînes de caractères)

[Lien vers la documentation de PHP](https://www.php.net/manual/fr/ref.strings.php)

### Taille d'une chaîne de caractères

Calcule la taille d'une chaîne de caractères.

```php
$mon_string = "test";
echo strlen($mon_string);
```

<details>
    <summary>🖥️ Sortie</summary>
```
4
```
</details>

### String en majuscule ou miniscule

Renvoie un string en majuscules ou minuscules.

```php
$ma_var = "toto";
echo strtoupper($ma_var) . "\n";

$ma_var = "TATA";
echo strtolower($ma_var);
```

<details>
    <summary>🖥️ Sortie</summary>
```
TOTO
tata
```
</details>

### Séparer avec explode et regrouper avec implode

Scinde our regroupe une chaîne de caractères en segments

```php
$ma_var = "toto;tata;tonton";

// Séparer un string vers un tableau
$mon_tableau = explode(";", $ma_var);
var_dump($mon_tableau);

// Regrouper des éléments d'un tableau vers un string
$mon_autre_var = implode(";", $mon_tableau);
echo $mon_autre_var;
```

<details>
    <summary>🖥️ Sortie</summary>
```
["toto", "tata", "tonton"]
toto;tata;tonton
```
</details>

### Supprimer les espaces en trop avec trim

```php
$ma_var = "   toto    ";
$mon_autre_var = trim($ma_var);
echo $ma_var;
```

<details>
    <summary>🖥️ Sortie</summary>
```
toto
```
</details>

Il existe aussi ltrim (left trim) pour supprimer les espaces seulement au début, et rtrim (right trim) pour supprimer les espaces seulement à la fin.

### Remplacer une partie d'un string avec replace

```php
$ma_var = "toto";
$mon_autre_var = str_replace("o", "a", $ma_var);
echo $ma_var;
```

<details>
    <summary>🖥️ Sortie</summary>
```
tata
```
</details>

## Utilitaires pour les int et float (nombres)

### Transformer une variable en int ou float

```php
$ma_var = "10";
$mon_int = intval($ma_var);
var_dump($ma_var);
```

<details>
    <summary>🖥️ Sortie</summary>
```
int(10)
```
</details>

Même principe avec `floatval()`

## Autres utilitaires

### Checker le type d'une variable

- `is_array()` — Détermine si une variable est un tableau
- `is_bool()` — Détermine si une variable est un booléen
- `is_callable()` — Détermine si une valeur peut être appelé comme une fonction dans la portée courante.
- `is_countable()` — Vérifie si le contenu de la variable est une valeur dénombrable
- `is_float()` — Détermine si une variable est de type nombre décimal
- `is_int()` — Détermine si une variable est de type nombre entier
- `is_numeric()` — Détermine si une variable est un nombre ou une chaîne numérique

```php
var_dump(is_int(23));
var_dump(is_int("23"));
```

<details>
    <summary>🖥️ Sortie</summary>
```
bool(true)
bool(false)
```
</details>

### Checker si une variable existe (et si elle est vide)

`isset()` détermine si une variable est considérée définie, ceci signifie qu'elle est déclarée et est différente de `null`.

```php
$est_ce_que_ma_var_existe = isset($ma_var)
var_dump($est_ce_que_ma_var_existe)
```

<details>
    <summary>🖥️ Sortie</summary>
```
bool(false)
```
</details>

`empty()` détermine si une variable est considérée définie et si sa valeur équivaut à `false`.

```php
$mon_tableau = ["toto", "tata", false]

$est_ce_que_toto_existe = empty($mon_tableau[0])
$est_ce_que_tonton_existe = empty($mon_tableau[2])
var_dump($est_ce_que_toto_existe)
var_dump($est_ce_que_tonton_existe)
```

<details>
    <summary>🖥️ Sortie</summary>
```
bool(false)
bool(true)
```
</details>