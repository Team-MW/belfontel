# BELFONTEL - Site Web Futuriste

Site web moderne et futuriste avec design noir, gris métallique et rouge.

## 🚀 Technologies Utilisées

- **React 19** avec TypeScript
- **Vite** - Build tool ultra-rapide
- **React Router** - Navigation multi-pages
- **Framer Motion** - Animations fluides
- **TailwindCSS** - Framework CSS utilitaire

## ✨ Fonctionnalités

### 1. Structure Multi-pages
- ✅ Accueil
- ✅ Services
- ✅ Portfolio
- ✅ Contact
- ✅ Routing avec React Router
- ✅ URLs propres et SEO-friendly

### 2. Design Responsive
- ✅ Menu burger animé sur mobile
- ✅ Menu horizontal sur desktop
- ✅ Panneau latéral avec animations
- ✅ Design adaptatif pour tous les écrans

### 3. Animations et Transitions
- ✅ Transitions fluides entre pages avec Framer Motion
- ✅ Effets de slide/fade au scroll
- ✅ Animations de particules
- ✅ Micro-interactions sur les boutons et cartes

### 4. Alternance des Sections
- ✅ Sections avec fonds alternés (dark/light)
- ✅ Effets de grille futuriste
- ✅ Glassmorphism sur les cartes
- ✅ Effets néon sur les titres

### 5. SEO Optimisé
- ✅ Meta tags dynamiques par page
- ✅ Open Graph pour réseaux sociaux
- ✅ Twitter Cards
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Balises sémantiques HTML5

### 6. Éléments Bonus
- ✅ Footer complet avec newsletter
- ✅ Liens réseaux sociaux
- ✅ CTA "Demander un devis" sur chaque page
- ✅ Formulaire de contact fonctionnel
- ✅ Lazy loading (natif avec Vite)

## 🎨 Palette de Couleurs

- **Noir profond**: `#0A0A0A`
- **Gris métallique**: `#1A1A1A` à `#8A8A8A`
- **Rouge primaire**: `#DC2626`
- **Rouge foncé**: `#991B1B`
- **Rouge clair**: `#EF4444`

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 🌐 Structure du Projet

```
belfontel/
├── public/
│   ├── robots.txt          # Configuration SEO
│   └── sitemap.xml         # Plan du site
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Navigation avec menu burger
│   │   ├── Footer.tsx      # Footer avec newsletter
│   │   └── SEO.tsx         # Composant SEO dynamique
│   ├── pages/
│   │   ├── Home.tsx        # Page d'accueil
│   │   ├── Services.tsx    # Page services
│   │   ├── Portfolio.tsx   # Page portfolio
│   │   └── Contact.tsx     # Page contact
│   ├── App.tsx             # Routing principal
│   ├── main.tsx            # Point d'entrée
│   └── index.css           # Styles globaux
├── tailwind.config.js      # Configuration Tailwind
└── package.json
```

## 🎯 Pages

### Accueil (/)
- Hero section avec animations de particules
- Section services avec 3 cartes
- Témoignages clients
- CTA final

### Services (/services)
- Hero section
- Grille de 4 services détaillés
- Liste des fonctionnalités par service

### Portfolio (/portfolio)
- Hero section
- Grille de projets
- Catégories et technologies utilisées

### Contact (/contact)
- Formulaire de contact complet
- Informations de contact
- Horaires d'ouverture

## 🚀 Optimisations

- **Code splitting** automatique avec Vite
- **Lazy loading** des composants
- **Animations optimisées** avec Framer Motion
- **CSS optimisé** avec TailwindCSS
- **Images optimisées** (à ajouter selon vos besoins)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Personnalisation

Pour personnaliser les couleurs, modifiez `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#DC2626', // Votre couleur principale
    dark: '#991B1B',
    light: '#EF4444',
  },
  // ...
}
```

## 📄 License

Tous droits réservés © 2026 BELFONTEL
# belfontel
