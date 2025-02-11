#set page(
  paper: "a4",
  margin: (x: 40pt, y: 40pt),
  numbering: "1/1",
  number-align: right + bottom
)

#set text(
  font: "Arial",
)

#show link: underline

#let infinite = text(size: 18pt, box[#v(-7pt)∞#v(-4pt)])

#let question_counter = counter("question_counter")
#let separator_counter = counter("separator_counter")
#let total_points = state("total_points", 0.0)

#let checkbox(question) = align(
  horizon,
  stack(
    dir: ltr,
    square(size: 12pt),
    h(10pt),
    box[#question]
  )
)

#let radio(question) = align(
  horizon,
  stack(
    dir: ltr,
    circle(radius: 5pt),
    h(10pt),
    box[#question]
  )
)

#let question_format(question: str, points: float, question_stack: array) = block(width: 100%)[
    #question_counter.step()
    #separator_counter.step()
    #v(10pt)

    #context[
    #if (separator_counter.get() > (1,)) [
        #line(start: (15%, 0%), end: (85%, 0%), stroke: gray)
        #v(5pt)
    ]

    #total_points.update(n => n + points)
    === Question #question_counter.display() – #question #h(1fr) /#points
    #v(10pt)
    #stack(
        dir: ltr,
        h(25pt),
        question_stack
    )
    ]
]

#let qcu(question: str, choices: array, points: float) = {
  let radios = ()

  for choice in choices {
    radios.push(radio(choice))
  }

  let radios_stack = stack(
      dir: ttb,
      spacing: 10pt,
      ..radios
    )

  return question_format(
    question: question,
    points: points,
    question_stack: radios_stack
  )
}

#let qcm(question: str, choices: array, points: float) = {
  let checkboxes = ()

  for choice in choices {
    checkboxes.push(checkbox(choice))
  }

  let checkboxes_stack = stack(
      dir: ttb,
      spacing: 10pt,
      ..checkboxes
    )

  return question_format(
    question: question,
    points: points,
    question_stack: checkboxes_stack
  )
}

#let q(question: content, points: float) = [
    #question_counter.step()
    #separator_counter.step()
    #v(10pt)

    #context[
        #if (separator_counter.get() > (1,)) [
            #line(start: (15%, 0%), end: (85%, 0%), stroke: gray)
            #v(5pt)
        ]

        #total_points.update(n => n + points)
        === Question #question_counter.display() – #question #h(1fr) /#points
        #align(
            center,
            rect(width: 100%, height: 75pt)
        )
    ]
]

#let picture(question: content, picture: content, points: float) = [
    #question_counter.step()
    #separator_counter.step()
    #v(10pt)

    #context[
        #if (separator_counter.get() > (1,)) [
            #line(start: (15%, 0%), end: (85%, 0%), stroke: gray)
            #v(5pt)
        ]

        #total_points.update(n => n + points)
        === Question #question_counter.display() – #question #h(1fr) /#points
        #align(
            center,
            picture
        )
    ]
]

#show raw.where(block: true): block.with(
  fill: luma(235),
  inset: 10pt,
  radius: 4pt,
)


#show raw.where(block: true, lang: "php"): code => {
  show raw.line: line => {
    text(fill: gray)[#line.number]
    h(1em)
    line.body
  }
  code
}


#align(
    center,
    [
        = DS – Développement WEB – BUT2 DACS

        12/02/2025
    ]
)

#v(15pt)

#grid(
    columns: (1fr, 220pt, 220pt, 1fr),
    [],
    [
        *Prénom :*
        #rect(width: 160pt, height: 25pt)
        #v(5pt)
        *NOM :*
        #rect(width: 160pt, height: 25pt)
    ],
    [
        *Règles :*
            - #box[#circle(radius: 4pt)] *Question choix unique*
            - #box[#square(size: 7pt)] *Question choix multiple*
                - Uniquement les bonnes réponses
            - #box[#rect(width: 25pt, height: 10pt)[ ]] *Question libre*
            - *Temps* : 1h30
            - #box[
                *Points totaux* :
                #context[
                    #total_points.final()
                ]
            ]
            - *Objectif* : Répondre aux questions
    ],
    []
)

#v(15pt)
#line(start: (-2%, 0%), end: (102%, 0%), stroke: 1pt + black)
#v(5pt)

== #underline[Partie 1 – Bases de PHP]

#qcm(
  question: "Quelles affirmations s'appliquent à PHP",
  choices: (
    "Scripting",
    "Compilé",
    "Interprété",
    "Multi-plateforme",
    "Faiblement typé",
    "Éxécuté côté client"
  ),
  points: 2
)

#qcu(
  question: "Quel code PHP ne retourne aucune erreur",
  choices: (
    [```<?php

    <div>
        <p>Mon paragraphe</p>
        <div><?php echo "test"; ?></div>
    </div>

    ?>
    ```],
    [```
    <div>
        <p>Mon paragraphe</p>
        <div><?php echo $ma_var; ?></div>
    </div>
    ```],
    [```
    <div>
        <p>Mon paragraphe</p>
        <div><?php echo $_SERVER["SERVER_ADDR"]; ?></div>
    </div>
    ```],
  ),
  points: 1
)

#question_counter.step()
#separator_counter.step()
#v(10pt)

#context[
    #total_points.update(n => n + 4)
    === Question #question_counter.display() – Décrire le contenu des superglobales/variables prédéfinies suivantes #h(1fr) /4
    #v(10pt)

    #grid(
        columns: (1fr, 2fr),
        align: center,
        stack(
            spacing: 18.5pt,
            [#v(5pt)\$GLOBALS],
            [\$\_SERVER],
            [\$\_GET],
            [\$\_POST],
            [\$\_FILES],
            [\$\_COOKIE],
            [\$\_SESSION],
            [\$\_REQUEST],
            [\$\_ENV],
            [\$argc],
            [\$argv],
        ),
        stack(
            box[#rect(width: 100%, height: 25pt)],
            box[#rect(width: 100%, height: 25pt)],
            box[#rect(width: 100%, height: 25pt)],
            box[#rect(width: 100%, height: 25pt)],
            box[#rect(width: 100%, height: 25pt)],
            box[#rect(width: 100%, height: 25pt)],
            box[#rect(width: 100%, height: 25pt)],
            box[#rect(width: 100%, height: 25pt)],
            box[#rect(width: 100%, height: 25pt)],
            box[#rect(width: 100%, height: 25pt)],
            box[#rect(width: 100%, height: 25pt)],
        )
    )
]

#q(
    question: [Qu'est-ce que permet de tester le regex suivant ? ~ ~#strong(delta: -250)[```js /^[\w\-\.]+@[a-z]+\.[a-z]{2,4}$/```]
    ],
    points: 1
)

#q(
    question: [Quelles remarques pouvez-vous faire sur le code PHP suivant ? (1 point pour le détail)

    #strong(delta: -250)[```php
    <?php
    $pdo = new PDO("mysql:host=localhost;dbname=testdb", "user", "password");

    $username = $_GET['username'];
    $query = "SELECT * FROM users WHERE username = '$username'";

    $result = $pdo->query($query);

    foreach ($result as $row) {
        echo "User: " . $row['username'] . "<br>";
    }
    ?>
    ```
    ]
    ],
    points: 3
)

#separator_counter.update(0)

#q(
    question: [
        Qu'est-ce qu'il va se passer si j'effectue la requête suivante sur le code ci-dessous ? (2 points pour le détail)


        #strong(delta: -250, [

        ```http
        POST /register HTTP/2.0
        Host: example.com
        Content-Type: application/x-www-form-urlencoded
        Content-Length: 13

        username=IUT&mail=mon@super.mail&nationality=italien&password=mon_super_mdp
        ```

        ```php
        <?php

        if (!empty($_POST)) {
            $errors = [];

            $username = $_POST['username'];
            if (!isset($username) || !is_string($username) || strlen($username) < 4) {
                $errors[] = "Erreur sur le nom d'utilisateur";
            }

            $mail = $_POST['mail'];
            if (!isset($mail) || !is_string($mail) || !str_contains($mail, "@")) {
                $errors[] = "Erreur sur l'email";
            }

            $nationality = $_POST['nationality'];
            if (!isset($nationality) || !is_string($nationality) || strlen($nationality) <= 0 || !in_array($nationality, ["Français", "Anglais", "Italien"])) {
                $errors[] = "Erreur sur la nationalité";
            }

            $password = $_POST['password'];
            if (!isset($password) || !is_string($password) || strlen($password) < 4) {
                $errors[] = "Erreur sur le mot de passe";
            }

            if (sizeof($errors) == 0) {
                header('Location: profile.php');
                return;
            }
        }
        ?>
        ```
        ])
    ],
    points: 3
)

#pagebreak()

== #underline[Partie 2 – Concepts du développement WEB]

#separator_counter.update(0)

#picture(
    question: "Remplissez le schéma suivant représentant une stack web (avec les communications)",
    picture: image("web_stack_empty.png"),
    points: 2
)

#q(
    question: "Décrivez le rôle du client dans une stack web",
    points: 1
)

#q(
    question: "Décrivez le rôle du front-end dans une stack web",
    points: 1
)

#q(
    question: "Décrivez le rôle du back-end dans une stack web",
    points: 1
)

#q(
    question: "Décrivez le rôle de la base-de-données dans une stack web",
    points: 1
)

#qcu(
    question: "Quel terme correspond à l'ensemble du front-end, back-end et de la base de données",
    choices: (
        "Stack WEB",
        "Full-stack"
    ),
    points: 1
)

#separator_counter.update(0)

#picture(
    question: [
        Numérotez l'ordre de communication entre les différents éléments du schéma pour la requête HTTP suivante

        #strong(delta: -250)[

        La requête ci-dessous est celle interceptée au premier passage dans le load balancer.
        ```http
        GET /products/69 HTTP/1.1
        Host: www.entreprise.com
        User-Agent: Mozilla/5.0
        Accept: application/json
        X-Target-Server: backend-server-1
        X-Forwarded-For: 158.78.235.6
        ```
        ]
    ],
    picture: image("web_transaction.png", width: 85%),
    points: 3
)


#question_counter.step()
#separator_counter.step()

#context[
    #line(start: (15%, 0%), end: (85%, 0%), stroke: gray)
    #v(5pt)

    #total_points.update(n => n + 4)
    === Question #question_counter.display() – Quelle est la différence entre le rendu côté client (client-side rendering, CSR) et le rendu côté serveur (server-side rendering, SSR) ? Quels sont les avantages et inconvénients de chaque approche ?#h(1fr) /4
    #align(
        center,
        rect(width: 100%, height: 170pt)
    )
]

#pagebreak()
== #underline[Partie 3 – HTTP & API]
#separator_counter.update(0)

#question_counter.step()
#separator_counter.step()
#v(10pt)

#context[
    #total_points.update(n => n + 2)
    === Question #question_counter.display() – Relier les codes de retour HTTP à leur catégorie #h(1fr) /2
    #v(10pt)
    #align(
        center,
    grid(
        columns: (1fr, 1fr),
        list(
            spacing: 15pt,
            [Information],
            [Redirection],
            [Erreur côté client],
            [Succès],
            [Erreur côté serveur],
        ),
        list(
            spacing: 15pt,
            highlight(fill: blue.lighten(50%))[1XX],
            highlight(fill: green.lighten(50%))[2XX],
            highlight(fill: purple.lighten(50%))[3XX],
            highlight(fill: orange.lighten(50%))[4XX],
            highlight(fill: red.lighten(50%))[5XX],
        ),
    )
    )
]

#q(
    question: "Qu'est-ce qu'est HTTPS par rapport à HTTP ?",
    points: 1
)

#q(
    question: "Qu'est-ce qu'une API ?",
    points: 2
)

#qcm(
    question: "Quelles méthodes standards existent dans le protocole HTTP ?",
    choices: (
        "GET",
        "LOGIN",
        "UPDATE",
        "PUT",
        "POST",
        "REMOVE"
    ),
    points: 1
)

#separator_counter.update(0)

#q(
    question: [Ici, un simple échange entre un client (requête) et un serveur (réponse). Est-ce que la réponse du serveur semble appropriée ?

        #strong(delta: -250)[
        #grid(
            columns: (1fr, 1fr),
            align: center + horizon,
            [
                Requête
                ```http
                GET /articles/42 HTTP/1.1
                Host: www.example.com
                User-Agent: Mozilla/5.0
                Accept: application/xml
                ```
            ],
            [
                Réponse
                ```http
                HTTP/1.1 401 OK
                Content-Type: application/json
                Content-Length: 126

                {
                  "id": 42,
                  "title": "Nouvel Article",
                  "content": "Voici le contenu de l'article."
                }
                ```
            ]
        )
        ]
    ],
    points: 2
)

== #underline[Partie 4 – Framework et autres technologies]
#separator_counter.update(0)

#question_counter.step()
#separator_counter.step()
#v(10pt)

#context[
    #if (separator_counter.get() > (1,)) [
        #line(start: (15%, 0%), end: (85%, 0%), stroke: gray)
        #v(5pt)
    ]

    #total_points.update(n => n + 4)
    === Question #question_counter.display() – Dans le futur, quels éléments pourraient vous permettre de comparer et choisir des technologies ? (framework, langage, bibliothèque, ...)#h(1fr) /4
    #align(
        center,
        rect(width: 100%, height: 300pt)
    )
]

#separator_counter.update(0)
#pagebreak()

PAGE BONUS

#q(
    question: "Comment fonctionne le système de migrations dans Laravel, et quels sont ses avantages par rapport à la gestion manuelle des bases de données ?",
    points: 1
)
#q(
    question: "Comment fonctionnent les composants Blade dans Laravel, et dans quels cas est-il préférable de les utiliser par rapport aux vues classiques ?",
    points: 1
)