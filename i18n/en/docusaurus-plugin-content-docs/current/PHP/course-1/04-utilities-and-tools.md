# ⚙️ | Utility Functions & Other Tools

## String Utilities

[Link to PHP documentation](https://www.php.net/manual/en/ref.strings.php)

### Uppercase and Lowercase Strings

```php
$ma_var = "toto";
echo strtoupper($ma_var) . "\n";

$ma_var = "TATA";
echo strtolower($ma_var);
```

<details>
    <summary>🖥️ Output</summary>
```
TOTO
tata
```
</details>

### Split with explode and Join with implode

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
    <summary>🖥️ Output</summary>
```
["toto", "tata", "tonton"]
toto;tata;tonton
```
</details>

### Remove Extra Spaces with trim

```php
$my_var = "   toto    ";
$my_other_var = trim($my_var);
echo $my_var;
```

<details>
    <summary>🖥️ Output</summary>
```
toto
```
</details>

There is also ltrim (left trim) to remove spaces only at the beginning, and rtrim (right trim) to remove spaces only at the end.

### Replace a Part of a String with replace

```php
$my_var = "toto";
$my_other_var = str_replace("o", "a", $my_var);
echo $my_var;
```

<details>
    <summary>🖥️ Output</summary>
```
tata
```
</details>

## Integer and Float Utilities

### Convert a Variable to int or float

```php
$my_var = "10";
$my_int = intval($my_var);
var_dump($my_var);
```

<details>
    <summary>🖥️ Output</summary>
```
int(10)
```
</details>

Same principle with `floatval()`

## Other Utilities

### Check the Type of a Variable

- `is_array()` — Determines if a variable is an array
- `is_bool()` — Determines if a variable is a boolean
- `is_callable()` — Determines if a value can be called as a function in the current scope
- `is_countable()` — Checks if the contents of the variable are countable
- `is_float()` — Determines if a variable is a floating-point number
- `is_int()` — Determines if a variable is an integer
- `is_numeric()` — Determines if a variable is a number or a numeric string

```php
var_dump(is_int(23));
var_dump(is_int("23"));
```

<details>
    <summary>🖥️ Output</summary>
```
bool(true)
bool(false)
```
</details>

### Check if a variable exists (and if it is empty)

`isset()` determines if a variable is considered set, which means it is declared and is not `null`.

```php
$is_my_var_set = isset($my_var)
var_dump($is_my_var_set)
```

<details>
    <summary>🖥️ Output</summary>
```
bool(false)
```
</details>

`empty()` determines if a variable is considered set and if its value is equivalent to `false`.

```php
$mon_tableau = ["toto", "tata", false]

$est_ce_que_toto_existe = empty($mon_tableau[0])
$est_ce_que_tonton_existe = empty($mon_tableau[2])
var_dump($est_ce_que_toto_existe)
var_dump($est_ce_que_tonton_existe)
```

<details>
    <summary>🖥️ Output</summary>
```
bool(false)
bool(true)
```
</details>
