# 📚 BookShelf - Gestionnaire de bibliothèque personnelle

## 📖 Présentation du projet

**BookShelf** est une Single Page Application (SPA) développée en JavaScript moderne (ES6+), permettant à un utilisateur de gérer sa collection personnelle de livres directement depuis son navigateur.

L'application permet d'ajouter, consulter, modifier et supprimer des livres, ainsi que de rechercher et trier sa collection. Les données sont sauvegardées localement grâce à l'API `localStorage`, sans nécessiter de backend.

Ce projet individuel s'inscrit dans une démarche de _Learning by Doing_, avec une organisation du travail basée sur Git, les branches de fonctionnalités, les Pull Requests et un tableau Kanban.

## ✨ Fonctionnalités

### Gestion des livres (CRUD)

- **Ajouter un livre :** enregistrer un nouveau livre avec ses informations.
- **Consulter les livres :** afficher l'ensemble de sa collection.
- **Modifier un livre :** mettre à jour les informations d'un livre existant grâce à un formulaire pré-rempli.
- **Supprimer un livre :** retirer un livre de sa collection.

### Recherche et tri

- Rechercher un livre par titre ou par auteur.
- Trier les livres par titre, auteur ou année de publication.

### Persistance des données

- Sauvegarder automatiquement les données dans `localStorage`.
- Charger les livres enregistrés au démarrage de l'application.
- Conserver la collection après le rechargement ou la fermeture du navigateur.

## 🛠️ Technologies utilisées

- **HTML5** — Structure de l'application.
- **CSS3 / Tailwind CSS** — Mise en forme et design.
- **JavaScript ES6+** — Logique et interactions dynamiques.
- **DOM API** — Manipulation dynamique des éléments HTML.
- **ES6 Modules** — Organisation du code avec `import` et `export`.
- **localStorage** — Persistance des données côté client.
- **Git & GitHub** — Gestion de versions et collaboration.
- **GitHub Projects** — Organisation et suivi des tâches.

## 🏗️ Architecture du projet

Le projet utilise une architecture modulaire afin de séparer les responsabilités et faciliter la maintenance du code.

```text
bookshelf/
│
├── index.html
│
├── css/
│   ├── input.css
│   └── output.css
│
├── js/
│   ├── app.js
│   ├── state.js
│   └── utils.js
│
├── package.json
├── package-lock.json
└── README.md
```

### Description des modules

| Fichier    | Responsabilité                                                                    |
| ---------- | --------------------------------------------------------------------------------- |
| `app.js`   | Gestion de l'interface, des événements et de la manipulation du DOM.              |
| `state.js` | Gestion de l'état de l'application et sauvegarde des données dans `localStorage`. |
| `utils.js` | Regroupement des fonctions utilitaires réutilisables.                             |

## 📋 Structure des données

Chaque livre est représenté par un objet JavaScript contenant les propriétés suivantes :

| Propriété     | Description                                         |
| ------------- | --------------------------------------------------- |
| `id`          | Identifiant unique du livre.                        |
| `title`       | Titre du livre (obligatoire).                       |
| `author`      | Nom de l'auteur (obligatoire).                      |
| `year`        | Année de publication.                               |
| `genre`       | Genre littéraire.                                   |
| `description` | Description du livre.                               |
| `status`      | Statut de lecture : `to-read`, `reading` ou `read`. |

## 🚀 Installation et lancement

### Prérequis

- [Node.js](https://nodejs.org/)
- npm
- Un navigateur web moderne.

### 1. Cloner le dépôt

```bash
git clone <URL_DU_DEPOT>
```

### 2. Accéder au projet

```bash
cd bookshelf
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Lancer Tailwind CSS en mode développement

```bash
npm run dev
```

### 5. Ouvrir l'application

Ouvrir `index.html` dans un navigateur ou utiliser l'extension Live Server de VS Code.

## 🌿 Workflow Git

Le développement est organisé autour de branches dédiées aux fonctionnalités.

- `main` : branche principale.
- `feature/*` : branches dédiées au développement de chaque fonctionnalité.

Chaque fonctionnalité est développée sur sa propre branche, puis proposée à travers une Pull Request avant d'être intégrée à la branche principale.

Les Pull Requests permettent de documenter les modifications et de faciliter les revues de code.

## 📌 Gestion du projet

Le suivi du travail est organisé avec **GitHub Projects**, à travers un tableau Kanban permettant de visualiser l'avancement des User Stories et des tâches.

Les tâches sont organisées selon leur état d'avancement :

- Todo
- In Progress
- In Review
- Done

## 🌐 Déploiement

L'application est destinée à être déployée sur **GitHub Pages**.

- **Dépôt GitHub :** https://github.com/hindsahli/bookshelf
- **Application déployée :** https://hindsahli.github.io/bookshelf/
- **Tableau Kanban :** https://github.com/hindsahli/bookshelf/projects

## 🎯 Objectifs pédagogiques

Ce projet permet de mettre en pratique les compétences suivantes :

- Manipulation du DOM et gestion des événements.
- Utilisation des fonctionnalités modernes de JavaScript ES6+.
- Création et gestion de modules JavaScript.
- Gestion des formulaires et validation des données.
- Persistance des informations avec `localStorage`.
- Organisation du code et séparation des responsabilités.
- Utilisation de Git et GitHub avec branches et Pull Requests.
- Planification et suivi du travail avec un tableau Kanban.

---

**Projet individuel — Développement Web et Web Mobile**

_Réalisé dans le cadre d'un apprentissage pratique basé sur le Learning by Doing._
