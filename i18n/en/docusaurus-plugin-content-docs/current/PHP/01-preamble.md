# Preamble

This course aims to teach the PHP programming language and the Laravel framework to 2nd year students in the Computer Science and Software Development program at IUT Lyon1.

## Schedule

> :::warning
> The versions of PHP and Laravel used are respectively: **PHP 8.2** and **Laravel 11**

### Session 1 - Introduction

- Presentation of the subject and objectives
- Introduction to PHP
- Lab 1: First scripts
- Utility functions & other tools
- Lab 2: Utilities & tools

### Session 2 - Front-end

- Introduction to WEB stack concepts (front-end, back-end, database)
- HTTP(S) protocol
- JSON
- Predefined variables
- Lab: Managing a form
- Lab: User profile page

### Session 3 - Back-end

- Introduction to API concepts
- Lab: Basic HTTP server
  - Routing

### Session 4 - Database Interaction

- Introduction to PDO and ORM concept
- Lab: Basic queries and mini-ORM

### Session 5 - Introduction to Security

- Introduction to cybersecurity (SQL injection, XSS, man in the middle, DDoS)
- Lab: "root-me" like challenges
  - Tag (simple) -> password in a tag
  - Guess the password (simple) -> password is "admin"
  - All Routes Lead To Rome (simple) -> find password in "Rome" file using URL `http://myserv/get_file?filename=../../Rome`
  - Botox injection (medium) -> SQL Injection
  - XSS (medium) -> XSS attack
  - Decrypt me (medium) -> Decode base64
  - MitM (hard) -> Steal a token using wireshark

### Session 6 - Framework

- Introduction to framework concept
- Lab: Creating a minimalist framework by assembling the previous parts
  - Expected features:
    - Routing
    - Templating engine
    - Mini-ORM
    - User configuration (host, port, database)
  - Minimize security vulnerabilities

### Session 7 - Laravel

- Introduction to Laravel (routing, controllers, requests/responses, validation, migrations, seeding, commands, jobs), presentation of documentation and ecosystem
- Mini presentation: Each student presents an element of the Laravel ecosystem (description, usage examples, complexity, popularity, price, reliability)
- Introduction to package manager and composer
- Lab: Creating an empty Laravel project

### Session 8-15 (7 sessions) - Graded Project

- Introduction to the Project Topic
  - "Creating an application for managing applications and tickets"
  - Alone or in a group of 2
  - Submission on GitHub
  - Use case description:
    - The developer and the admin can create an application. Only the admin can delete an application
      - The application is linked to multiple users, has a name, a description, and a status (in development, in testing, deployed, in maintenance)
    - Users can create tickets for an application, only the admin can delete a ticket
      - A ticket has a title, a description, and a status (unresolved, resolved)
    - The user and the developer can only see the applications they are assigned to and their tickets. The admin can see everything
  - Expected Features:
    - Authentication (Breeze)
    - 3 roles, admin, developer, user (laravel-permissions)
    - Full-text search for projects/tickets (Scout)
    - Daily reporting of tickets in CSV format (task scheduling + job + file storage)

## Educational Objectives

> :::info
> Extract from the national program of BUT Computer Science (2022) - [PDF](https://www.enseignementsup-recherche.gouv.fr/sites/default/files/annexe-2-licence-professionnelle-bachelor-universitaire-de-technologie-informatique-29016.pdf)

### WEB Development

> 1.3.1 - page 182

**Targeted Skills:**

- Develop - that is, design, code, test, and integrate - an IT solution for a client.
- Propose optimized IT applications based on specific criteria: execution time, accuracy, resource consumption..
- Install, configure, make available, maintain in operational conditions infrastructures, services, and networks, and optimize the IT system of an organization
- Design, manage, administer, and exploit enterprise data and provide all the information for effective business management SAÉ within which the resource can be mobilized and combined:
- SAÉ 3.Deploi.01 | Creation and deployment of application services

**Description:**

The objective of this resource is to continue learning programming around web technologies. This resource puts you in a development situation based on specifications, which is the logical next step in learning development.
Studied reference knowledge
- Web programming (e.g., client-side or server-side, context management, authentication, web services...)
- Awareness of web security (e.g., injection, filtering...)
- Awareness of application security (e.g., password encoding, input typing...)

**Suggested Extensions**
- Introduction to architectural patterns (e.g., MVC...)

**Targeted Critical Learnings:**
- AC21.01 | Develop and implement functional and non-functional specifications based on requirements
- AC21.02 | Apply accessibility and ergonomics principles
- AC21.03 | Adopt good design and programming practices
- AC22.03 | Understand the challenges and means of securing data and code
- AC23.03 | Secure the services and data of a system
- AC24.03 | Organize data retrieval through programming and visualization
- AC24.04 | Handle heterogeneous data

**Keywords:** Web programming - Specifications - Security

**Hourly Volume:** Nationally defined hourly volume: 26 hours including 20 hours of practical work

### Software Architecture

> 2.3.1 - Page 204

Targeted Skills:
- Develop - that is, design, code, test, and integrate - an IT solution for a client.
- Install, configure, make available, maintain operational infrastructures, services, and networks, and optimize the IT system of an organization
- Acquire, develop, and exploit the skills necessary to work effectively in an IT team SAÉ in which the resource can be mobilized and combined:
- SAÉ 4.Deploi.01 | Deploy and secure services in a network

**Description:**
The objective of this resource is to present programming components that can be used in various domains.

**Studied reference knowledge:**
- Architecture patterns (e.g.: MVC, MVVM...)
- Use of software components, programming interfaces, third-party libraries
- Development of web services

**Suggested extensions:**
- Use of web services (e.g.: asynchronous requests, data exchange formats...)
- Organization of data access: databases, directories, Web services...

**Targeted critical learnings:**
- AC21.01 | Develop and implement functional and non-functional specifications based on requirements
- AC21.02 | Apply accessibility and ergonomics principles
- AC21.03 | Adopt good design and programming practices
- AC23.01 | Design and develop communicating applications
- AC26.02 | Apply an approach to integrate an IT team within an organization

**Keywords:** Web services - Libraries - Architecture patterns - Data access

**Hourly volume:** Nationally defined hourly volume: 32 hours including 16 hours of practical work
