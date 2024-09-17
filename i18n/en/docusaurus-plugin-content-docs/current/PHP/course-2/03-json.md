# 📜 | JSON

:::info
This part is not to be memorized, but it is a key element in understanding the world of the WEB. **Understanding the different terms mentioned is necessary**.
:::

**JSON** (JavaScript Object Notation) is a lightweight data format widely used for exchanging information between systems, especially in web applications. It is both easy for humans to read and simple for machines to interpret. JSON is directly derived from the object notation of the JavaScript language. Thus, JSON can be directly used in JavaScript code and vice versa. Although derived from JavaScript syntax, it can be used with many programming languages such as Python, Java, PHP, and Go.

### Why use JSON?

<details>
  <summary>**Readability**</summary>

JSON is encoded in UTF-8 (i.e., not in bytes like 0xf6 0x3a). Its clear syntax makes it easy to read for humans.
</details>

<details>
  <summary>**Simplicity**</summary>

Less verbose than XML, it is lighter in terms of size.

:::tip XML for the curious
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
  <summary>**Compatibility**</summary>

JSON is natively supported by most modern programming languages, making it easier to adopt in various contexts.
</details>

<details>
  <summary>**API Interactions**</summary>

JSON has become the standard for data exchange in modern web APIs.
</details>

### JSON Structure

JSON consists of two main structures, objects and arrays.

#### Objects

Objects are collections of key-value pairs, enclosed in curly braces `{}`. Each key is a string (text) followed by a value (which can be of different types).

Example of a JSON object:
```json
{
  "nom": "Dupont",
  "age": 30,
  "estMembre": true
}
```

#### Arrays

Arrays are ordered lists of values, enclosed in square brackets `[]`. Array elements can be of different types: objects, strings, numbers, booleans, or even other arrays.

Example of a JSON array:
```json
[
  "Paris",
  "Londres",
  "Tokyo"
]
```

### Supported Types

The data types supported by JSON are:

- **Strings** (string): surrounded by double quotes `""` (e.g. `"name": "Dupont"`).
- **Numbers** (int, float): integers or decimals without quotes (e.g. `"age": 30`, `"height": 1.80`).
- **Booleans**: logical values `true` or `false` (e.g. `"isMember": true`).
- **Null**: to indicate the absence of a value (e.g. `"address": null`).
- **Objects**: collections of key-value pairs, surrounded by curly braces `{}`.
- **Arrays**: ordered lists, surrounded by square brackets `[]`.

### Usage Examples

JSON is mainly used to exchange data between a **client** (like a browser) and a **server** in web applications. For instance, an API could return a user's information in JSON format when a request is made.

**Example of a JSON response from an API**:
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

### ⚙️ | Encoding and Decoding JSON in PHP

#### json_encode

Returns the JSON representation as a string of a value.

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
    <summary>🖥️ Output</summary>
```json
{"user":{"id":123,"name":"Dupont","email":"dupont@example.com"},"status":"success"}
```
</details>

#### json_decode

Decodes a JSON content string into a PHP variable.

```php
$mon_json = '{"utilisateur":{"id":123,"nom":"Dupont","email":"dupont@example.com"},"status":"success"}';

$ma_var = json_decode($mon_json);

var_dump($ma_var);
```

<details>
    <summary>🖥️ Output</summary>
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
