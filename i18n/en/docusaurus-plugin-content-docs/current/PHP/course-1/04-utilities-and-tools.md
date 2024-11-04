---
categories:
- ⚙️ Practical Course
---

# ⚙️ | Utility Functions & Other Tools

## String Utilities

[Link to PHP documentation](https://www.php.net/manual/en/ref.strings.php)

### String Length

Calculates the length of a string.

```php
$my_string = "test";
echo strlen($my_string);
```

<details>
    <summary>🖥️ Output</summary>
```
4
```
</details>

### Uppercase and Lowercase String

Converts a string to uppercase or lowercase.

```php
$my_var = "toto";
echo strtoupper($my_var) . "\n";

$my_var = "TATA";
echo strtolower($my_var);
```

<details>
    <summary>🖥️ Output</summary>
```
TOTO
tata
```
</details>

### Splitting with explode and Joining with implode

Splits or joins a string into segments.

```php
$my_var = "toto;tata;tonton";

// Split a string into an array
$my_array = explode(";", $my_var);
var_dump($my_array);

// Join array elements into a string
$my_other_var = implode(";", $my_array);
echo $my_other_var;
```

<details>
    <summary>🖥️ Output</summary>
```
["toto", "tata", "tonton"]
toto;tata;tonton
```
</details>

### Removing Extra Spaces with trim

```php
$my_var = "   toto    ";
$my_other_var = trim($my_var);
echo $my_other_var;
```

<details>
    <summary>🖥️ Output</summary>
```
toto
```
</details>

There are also `ltrim` (left trim) to remove spaces only at the beginning, and `rtrim` (right trim) to remove spaces only at the end.

### Replacing Part of a String with replace

```php
$my_var = "toto";
$my_other_var = str_replace("o", "a", $my_var);
echo $my_other_var;
```

<details>
    <summary>🖥️ Output</summary>
```
tata
```
</details>

## Integer and Float Utilities

### Converting a Variable to int or float

```php
$my_var = "10";
$my_int = intval($my_var);
var_dump($my_int);
```

<details>
    <summary>🖥️ Output</summary>
```
int(10)
```
</details>

Same principle with `floatval()`

## Other utilities

### Checking the type of a variable

- `is_array()` — Determines if a variable is an array
- `is_bool()` — Determines if a variable is a boolean
- `is_callable()` — Determines if a value can be called as a function in the current scope.
- `is_countable()` — Checks if the variable's contents are countable
- `is_float()` — Determines if a variable is a float number
- `is_int()` — Determines if a variable is an integer number
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

### Checking if a variable exists (and if it is empty)

`isset()` determines if a variable is considered defined, meaning it is declared and is not `null`.

```php
$is_my_var_existing = isset($my_var)
var_dump($is_my_var_existing)
```

<details>
    <summary>🖥️ Output</summary>
```
bool(false)
```
</details>

`empty()` determines if a variable is considered defined and if its value is equal to `false`.

```php
$my_array = ["toto", "tata", false]

$is_toto_existing = empty($my_array[0])
$is_uncle_existing = empty($my_array[2])
var_dump($is_toto_existing)
var_dump($is_uncle_existing)
```

<details>
    <summary>🖥️ Output</summary>
```
bool(false)
bool(true)
```
</details>
