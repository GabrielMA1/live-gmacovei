# GMACOVEI Portfolio Website

A premium, minimalist portfolio website for Gabriel Macovei featuring a dramatic diagonal split-screen hero design showcasing RielArt and Spotix ventures.

![Portfolio Preview](https://GMACOVEI.com/preview.jpg)

## Features

- **Diagonal Split-Screen Hero**: Dramatic 50/50 layout with RielArt (Digital Excellence) on the left and Spotix (Local Advertising) on the right
- **Premium Dark Theme**: Charcoal background with electric blue (RielArt) and warm gold (Spotix) accents
- **Sticky Navigation**: Backdrop blur effect with smooth scroll behavior
- **Responsive Design**: Mobile-first approach with hamburger menu on mobile devices
- **Smooth Animations**: Fade-in reveals, hover effects, and scroll-triggered animations
- **SEO Optimized**: Complete meta tags, structured data, and Open Graph support
- **Contact Form**: Full-featured form with service selection and validation
- **Conversion Focused**: Multiple CTAs, urgency elements, and trust indicators

## Tech Stack

- **Framework**: React + TypeScript + Vite
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui
- **Animations**: CSS animations + Intersection Observer API
- **Icons**: Lucide React

## Project Structure

```
├── src/
│   ├── components/
│   │   └── Navigation.tsx      # Sticky nav with mobile menu
│   ├── sections/
│   │   ├── Hero.tsx            # Diagonal split-screen hero
│   │   ├── About.tsx           # About me with stats
│   │   ├── Contact.tsx         # Contact form & CTAs
│   │   └── Footer.tsx          # Footer with links
│   ├── App.tsx                 # Main app component
│   ├── index.css               # Global styles & animations
│   └── main.tsx                # Entry point
├── index.html                  # HTML with SEO meta tags
├── tailwind.config.js          # Tailwind configuration
└── package.json
```

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Build for Production

```bash
# Create optimized build
npm run build

# Output will be in dist/ folder
```

## GitHub Pages Deployment

### Method 1: Deploy to Root Domain (GMACOVEI.com)

1. **Create a new repository** on GitHub named `GMACOVEI` (or your preferred name)

2. **Update vite.config.ts** for custom domain:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for custom domain
})
```

3. **Build the project**:

```bash
npm run build
```

4. **Create a CNAME file** in the `dist` folder:

```bash
echo "GMACOVEI.com" > dist/CNAME
```

5. **Deploy to GitHub Pages** using `gh-pages`:

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"scripts": {
  "predeploy": "npm run build && echo 'GMACOVEI.com' > dist/CNAME",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

6. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

7. **Configure DNS** (for custom domain):
   - Add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME record: `GMACOVEI.com` → `yourusername.github.io`

### Method 2: Deploy to Subdomain (username.github.io/GMACOVEI)

1. **Update vite.config.ts**:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/GMACOVEI/', // Repository name
})
```

2. **Build and deploy**:

```bash
npm run build
npx gh-pages -d dist
```

### Method 3: Manual Upload

1. Build the project: `npm run build`
2. Go to repository Settings → Pages
3. Source: GitHub Actions
4. Use the following workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Customization

### Colors

Edit `tailwind.config.js` to customize brand colors:

```javascript
colors: {
  rielart: {
    DEFAULT: "hsl(217 91% 60%)",  // Electric Blue
    light: "hsl(217 91% 70%)",
    dark: "hsl(217 91% 50%)",
  },
  spotix: {
    DEFAULT: "hsl(25 95% 53%)",   // Warm Orange/Gold
    light: "hsl(35 95% 60%)",
    dark: "hsl(20 95% 47%)",
  },
}
```

### Content

- **Hero Section**: Edit `src/sections/Hero.tsx`
- **About Section**: Edit `src/sections/About.tsx`
- **Contact Section**: Edit `src/sections/Contact.tsx`
- **Navigation**: Edit `src/components/Navigation.tsx`

### SEO

Update meta tags in `index.html`:
- Title and description
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)

## External Links

The following domains are configured:

- **RielArt**: https://rielart.com
- **Spotix**: https://myspotix.com
- **Portfolio**: https://GMACOVEI.com

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Optimized build with Vite
- Tree-shaking enabled
- Lazy loading for images
- Minimal dependencies
- Compressed assets

## License

Copyright 2024 Gabriel Macovei. All rights reserved.

## Contact

- Email: hi@GMACOVEI.com
- Website: https://GMACOVEI.com
- RielArt: https://rielart.com
- Spotix: https://myspotix.com

---

Built with React, TypeScript, Tailwind CSS, and passion.
