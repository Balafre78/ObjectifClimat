# Objectif climat !

Bienvenue sur **Objectif climat !**, un site dédié à la sensibilisation et à la lutte contre le changement climatique.

## Description

Ce projet vise à informer les utilisateurs sur :
- Les causes du changement climatique.
- Ses conséquences sur notre planète.
- Les solutions et actions concrètes pour agir à son échelle.
- Permettre aux utilisateurs de calculer leur empreinte carbone.

## Auteurs
- **Raphaël GUIGNOLLE**
- **Pierre CAMELERI**

## Fonctionnalités

| Fonctionnalité              | Description                                        | Avancement                         |
|-----------------------------|----------------------------------------------------|------------------------------------|
| **Mode sombre**             | Basculement via un script JavaScript               | ![](https://geps.dev/progress/100) |
| **Slider d'images**         | Présentation d'image sous forme de slider          | ![](https://geps.dev/progress/100) |
| **Navigation intuitive**    | Menu pour accéder facilement aux différentes pages | ![](https://geps.dev/progress/100) |
| **Cartes réversibles**      | Cartes interactives pour les informations          | ![](https://geps.dev/progress/100) |
| **Calculateur d'émissions** | Outil pour estimer son empreinte carbone           | ![](https://geps.dev/progress/100) |
| **Graphique en camembert**  | Visualisation des données d'émissions              | ![](https://geps.dev/progress/100) |
| **Responsive**              | Adaptation aux différents écrans                   | ![](https://geps.dev/progress/100) |

## Technologies utilisées

- **HTML5** : Structure du site.
- **CSS3** : Mise en page et styles, y compris les animations.
- **JavaScript** : Fonctionnalités interactives (mode sombre, slider).

## Structure du projet
```
src/
├── assets/
│ ├── fonts/            # Polices utilisées
│ ├── videos/           # Vidéos utilisées
│ └── images/           # Images utilisées
├── css/
│ ├── style.css         # Styles principaux
│ ├── slider.css        # Styles pour le slider
│ └── card.css          # Styles pour les cartes réversibles
├── html/
│ ├── index.html        # Page d'Accueil
│ ├── comprendre.html   # Page Comprendre
│ ├── consequences.html # Page Conséquences
│ ├── solutions.html    # Page Solutions
│ ├── calculateur.html  # Page Calculateur
│ └── apropos.html      # Page À propos
├── js/
│ ├── common.js         # Script communs à toutes les pages
│ ├── calculateur.js    # Script utile pour le calculateur d'émissions
│ ├── camembert.js      # Script pour le graphique en camembert
│ └── slider.js         # Script pour le slider
```

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/Balafre78/ObjectifClimat.git
2. Accédez au répertoire du projet :
   ```bash
   cd ObjectifClimat
   ```
3. Déplacez le contenu du dossier `src` vers la racine de votre serveur web
4. Ouvrez le fichier `index.html` dans votre navigateur pour visualiser le site
