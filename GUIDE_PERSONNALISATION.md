# 🎨 GUIDE DE PERSONNALISATION

## Modifier les Couleurs

### Option 1: Modifier la palette complète
Éditez `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#DC2626', // Changez cette couleur
    dark: '#991B1B',
    light: '#EF4444',
  },
  metallic: {
    900: '#0A0A0A', // Noir le plus foncé
    800: '#1A1A1A',
    // ... etc
  },
}
```

### Option 2: Modifier les styles CSS
Éditez `src/index.css` pour les classes personnalisées:

```css
.neon-text {
  @apply text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-primary-dark;
  text-shadow: 0 0 20px rgba(220, 38, 38, 0.5);
}
```

## Modifier le Contenu

### Page d'Accueil
Fichier: `src/pages/Home.tsx`

```typescript
// Modifier le titre hero
<h1>L'AVENIR DU WEB</h1> // Ligne 78

// Modifier les services
const services = [
  {
    title: 'Votre titre',
    description: 'Votre description',
    icon: '🚀', // Emoji ou composant SVG
  },
  // ...
];
```

### Menu de Navigation
Fichier: `src/components/Header.tsx`

```typescript
const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  // Ajoutez vos liens ici
];
```

### Footer
Fichier: `src/components/Footer.tsx`

```typescript
// Modifier les réseaux sociaux
const footerLinks = {
  social: [
    { name: 'Facebook', url: 'https://facebook.com/votreprofil', icon: '...' },
    // ...
  ],
};
```

## Ajouter une Nouvelle Page

### Étape 1: Créer le composant
Créez `src/pages/MaNouvellePage.tsx`:

```typescript
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const MaNouvellePage = () => {
  return (
    <div className="min-h-screen pt-24">
      <SEO 
        title="Ma Nouvelle Page"
        description="Description de ma page"
        keywords="mots, clés, pertinents"
      />
      
      <section className="section-dark py-20">
        <div className="container-custom">
          <h1 className="text-5xl font-bold neon-text">
            Titre de ma page
          </h1>
        </div>
      </section>
    </div>
  );
};

export default MaNouvellePage;
```

### Étape 2: Ajouter la route
Dans `src/App.tsx`:

```typescript
import MaNouvellePage from './pages/MaNouvellePage';

// Dans le <Routes>
<Route path="/ma-page" element={<MaNouvellePage />} />
```

### Étape 3: Ajouter au menu
Dans `src/components/Header.tsx`:

```typescript
const navLinks = [
  // ... liens existants
  { name: 'Ma Page', path: '/ma-page' },
];
```

### Étape 4: Mettre à jour le sitemap
Dans `public/sitemap.xml`:

```xml
<url>
  <loc>https://www.belfontel.com/ma-page</loc>
  <lastmod>2026-01-18</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

## Personnaliser les Animations

### Modifier la vitesse des animations
Dans vos composants:

```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }} // Changez la durée ici
>
```

### Ajouter de nouvelles animations
Consultez la documentation Framer Motion:
https://www.framer.com/motion/

Exemples:

```typescript
// Rotation
<motion.div
  whileHover={{ rotate: 360 }}
  transition={{ duration: 0.5 }}
>

// Scale
<motion.div
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>

// Parallax
<motion.div
  style={{ y: scrollY }}
>
```

## Modifier les Polices

### Option 1: Changer la police Google Fonts
Dans `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
```

Dans `src/index.css`:

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

### Option 2: Ajouter une police locale
1. Placez les fichiers de police dans `public/fonts/`
2. Dans `src/index.css`:

```css
@font-face {
  font-family: 'MaPolice';
  src: url('/fonts/mapolice.woff2') format('woff2');
}

body {
  font-family: 'MaPolice', sans-serif;
}
```

## Formulaire de Contact

### Connecter à un backend
Dans `src/pages/Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://votre-api.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      alert('Message envoyé avec succès !');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  } catch (error) {
    alert('Erreur lors de l\'envoi du message');
  }
};
```

### Utiliser EmailJS (sans backend)
1. Installez: `npm install @emailjs/browser`
2. Créez un compte sur emailjs.com
3. Configurez votre template
4. Utilisez dans le formulaire:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  ).then(() => {
    alert('Message envoyé !');
  });
};
```

## Ajouter des Images

### Remplacer les emojis par des images
1. Placez vos images dans `src/assets/`
2. Importez-les:

```typescript
import heroImage from '../assets/hero.jpg';

<img src={heroImage} alt="Hero" className="w-full h-auto" />
```

### Optimiser les images
Utilisez des formats modernes (WebP, AVIF) et lazy loading:

```typescript
<img 
  src={image} 
  alt="Description"
  loading="lazy"
  className="w-full h-auto"
/>
```

## Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Glissez-déposez le dossier 'dist' sur netlify.com
```

### GitHub Pages
```bash
npm install -D gh-pages

# Ajoutez dans package.json:
"homepage": "https://votreusername.github.io/belfontel",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

npm run deploy
```

## Variables d'Environnement

Créez `.env.local`:

```env
VITE_API_URL=https://votre-api.com
VITE_EMAILJS_SERVICE_ID=votre_service_id
```

Utilisez dans le code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Support

Pour toute question, consultez:
- Documentation React: https://react.dev
- Documentation Framer Motion: https://www.framer.com/motion
- Documentation TailwindCSS: https://tailwindcss.com
- Documentation Vite: https://vitejs.dev
