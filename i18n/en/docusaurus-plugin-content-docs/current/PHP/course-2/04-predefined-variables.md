---
categories:
- ⚙️ Practical Course
---

# ⚙️ | Predefined Variables

https://www.php.net/manual/en/reserved.variables.php

https://www.php.net/manual/en/language.variables.scope.php

In PHP, some **predefined variables** are available at all times and facilitate the management of interactions between the server, the client, and the execution environment. Among these variables, we find **superglobals** and other specific variables.

### Superglobals

Superglobals are associative arrays that contain information related to the execution environment, HTTP requests, uploaded files, etc. They are accessible everywhere in the script, without the need to pass them as arguments.

<details>
    <summary>**$GLOBALS**</summary>

Contains all global variables of the script.

</details>

<details>
    <summary>**$_SERVER**</summary>

Information about the server and the environment (e.g., `$_SERVER['HTTP_HOST']` for the host name).
</details>

<details>
    <summary>**$_GET**</summary>

Contains data sent via an HTTP GET request (e.g., from a URL).

**URL** : `http://example.com/page.php?name=toto&age=30`

```php
echo "Name: " . $_GET['name'];
echo "Age: " . $_GET['age']; 
```

<details>
    <summary>🖥️ Output</summary>
```
Name: toto
Age: 30
```
</details>
</details>

<details>
    <summary>**$_POST**</summary>

Contains data sent via an HTTP POST request (e.g., from a form).

```html
<form method="post" action="/process.php">
    <input type="text" name="first_name" placeholder="Your first name">
    <input type="submit" value="Send">
</form>
```

```php
// Display the first name sent via the form
echo "First Name: " . $_POST['first_name'];
```
</details>

<details>
    <summary>**$_FILES**</summary>

Contains files uploaded via a form.

```html
<form action="/upload.php" method="post" enctype="multipart/form-data">
    <input type="file" name="my_file">
    <input type="submit" value="Upload">
</form>
```

```php
// No error
if ($_FILES['my_file']['error'] === UPLOAD_ERR_OK) {
    $file_name = $_FILES['my_file']['name'];
    $temporary_name = $_FILES['my_file']['tmp_name'];
    move_uploaded_file($temporary_name, "uploads/$file_name");
}
// One or more errors
else {
    echo "Error during upload.";
}
```

See the [list of file upload errors](https://www.php.net/manual/en/features.file-upload.errors.php).
</details>

<details>
    <summary>**$_COOKIE**</summary>

Contains the cookies sent by the client.

```php
setcookie('user', 'toto', time() + 3600);

if (isset($_COOKIE['user'])) {
    echo 'User: ' . $_COOKIE['user'];
}
```

<details>
    <summary>🖥️ Output</summary>
```
User: toto
```
</details>
</details>

<details>
    <summary>**$_SESSION**</summary>

Sessions allow storing user information across different pages.

- **session_start()**: Must be called to initialize the session.
- **session_destroy()**: Used to destroy all session variables.

**Example**:
```php
// Start the session
session_start();

// Store data in the session
$_SESSION['user'] = 'toto';

// Access the data
echo "User: " . $_SESSION['user'];

// Destroy the session
session_destroy();
```
<details>
    <summary>🖥️ Output</summary>
```
User: toto
```
</details>
</details>

<details>
    <summary>**$_REQUEST**</summary>

Combines data from `$_GET`, `$_POST`, and `$_COOKIE`.
</details>

<details>
    <summary>**$_ENV**</summary>

Contains server environment variables.

```php
echo $_ENV['HOME'];
```

<details>
    <summary>🖥️ Output</summary>
```
/home/toto
```
</details>
</details>

### Other predefined variables

<details>
    <summary>**$argc**</summary>

Contains the number of arguments passed to the script via the command line (similar to C).
</details>

<details>
    <summary>**$argv**</summary>

Contains an array of arguments passed via the command line (similar to C).
</details>
