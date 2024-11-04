#set page(
  paper: "a4",
  margin: (x: 40pt, y: 40pt),
  numbering: "1/1",
  number-align: right + bottom
)

#set text(
  font: "Arial",
)

#let infinite = text(size: 18pt, box[#v(-7pt)∞#v(-4pt)])

#let question_counter = counter("question_counter")
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
    #v(10pt)

    #context[
    #if (question_counter.get() > (1,)) [
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
    #v(10pt)

    #context[
        #if (question_counter.get() > (1,)) [
            #line(start: (15%, 0%), end: (85%, 0%), stroke: gray)
            #v(5pt)
        ]

        #total_points.update(n => n + points)
        === Question #question_counter.display() #h(1fr) /#points
        #v(5pt)
        #question
        #align(
            center,
            rect(width: 100%, height: 180pt)
        )
    ]
]

#align(
    center,
    [
        = QCM 1 – Développement WEB – BUT2 DACS

        Julien CAPOSIENA
    ]
)

#v(20pt)

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
            - #box[#circle(radius: 4pt)] *Question choix unique* : [0;1] pts
            - #box[#square(size: 7pt)] *Question choix multiple* : \[-#infinite\;2\] pts
                - Mauvaise réponse : -0.25 pts
                - Uniquement les bonnes réponses : 2 pts
            - *Question libre* : [0;3] pts
            - *Temps* : 5 minutes
            - #box[
                *Points totaux* :
                #context[
                    #total_points.final()
                ]
            ]
    ],
    []
)

#v(15pt)
#line(start: (-2%, 0%), end: (102%, 0%), stroke: 1pt + black)
#v(5pt)

#qcu(
  question: "PHP est un langage de scripting",
  choices: (
    "Vrai",
    "Faux",
  ),
  points: 1
)

#qcm(
  question: "Quelles affirmations s'appliquent à PHP",
  choices: (
    "Compilé",
    "Interprété",
    "Multi-plateforme",
    "Faiblement typé",
    "Éxécuté côté client"
  ),
  points: 2
)

#q(
  question: [
    Citez et décrivez comment intéragissent les éléments (stack) composant une application WEB.

    _Client inclut, la stack comporte 4 éléments. Il est possible de faire un schéma._
  ],
  points: 3
)