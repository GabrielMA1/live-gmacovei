# GMACOVEI Portfolio

[![Deploy to GitHub Pages](https://github.com/gmacovei/gmacovei.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/gmacovei/gmacovei.github.io/actions/workflows/deploy.yml)

A premium, modern portfolio website for Gabriel Macovei - Entrepreneur, Digital Strategist, and Founder of RielArt & Spotix.

![Portfolio Preview](./preview.png)

## Features

- **Split-Screen Hero Design** - Dramatic diagonal split showcasing both RielArt and Spotix companies
- **Premium Dark Theme** - Charcoal background with electric blue (RielArt) and gold (Spotix) accents
- **Smooth Animations** - Scroll-triggered reveals, hover effects, and micro-interactions
- **Responsive Design** - Mobile-first approach with hamburger menu for mobile devices
- **SEO Optimized** - Complete meta tags, Open Graph, Twitter Cards, and structured data
- **Fast Loading** - Optimized build with Vite, minimal dependencies
- **Contact Form** - Fully functional form with validation and success states
- **GitHub Actions CI/CD** - Automatic deployment to GitHub Pages

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui (40+ pre-installed components)
- **Icons**: Lucide React
- **Animations**: CSS + Intersection Observer API
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure

```
gmacovei-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── custom/
│   │   │   └── Navigation.tsx  # Sticky navigation with mobile menu
│   │   └── ui/                 # shadcn/ui components
│   ├── sections/
│   │   ├── Hero.tsx            # Split-screen hero section
│   │   ├── About.tsx           # About me with stats
│   │   ├── Contact.tsx         # Contact form & CTAs
│   │   └── Footer.tsx          # Footer with links
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # App-specific styles
│   ├── index.css               # Global styles & Tailwind
│   └── main.tsx                # Entry point
├── index.html                   # HTML template with SEO meta tags
├── tailwind.config.js           # Tailwind configuration
├── vite.config.ts               # Vite configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/gmacovei/gmacovei.github.io.git
   cd gmacovei.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Push to main branch**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **GitHub Actions will automatically:**
   - Build the project
   - Deploy to GitHub Pages
   - Update the live site

### Option 2: Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy `dist` folder to GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose the branch containing your built files

### Setting Up GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Your site will be available at: `https://gmacovei.com` (custom domain) or `https://gmacovei.github.io`

## Custom Domain Setup

To use your custom domain (gmacovei.com):

1. **Add CNAME file** (already included in this repo)
   ```
   gmacovei.com
   ```

2. **Configure DNS** with your domain provider:
   
   For apex domain (`gmacovei.com`):
   ```
   Type: A
   Name: @
   Value: 
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
   ```
   
   For www subdomain:
   ```
   Type: CNAME
   Name: www
   Value: gmacovei.github.io
   ```

3. **Enable HTTPS** in GitHub Pages settings

## Customization Guide

### Changing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  rielart: {
    DEFAULT: "#00D4FF",    // Your brand color
    dark: "#00A8CC",
    light: "#66E5FF",
  },
  spotix: {
    DEFAULT: "#FFD700",    // Your brand color
    dark: "#CCAC00",
    light: "#FFE566",
  },
}
```

### Updating Content

- **Hero Section**: Edit `src/sections/Hero.tsx`
- **About Section**: Edit `src/sections/About.tsx`
- **Contact Section**: Edit `src/sections/Contact.tsx`
- **Footer**: Edit `src/sections/Footer.tsx`

### Adding New Sections

1. Create new file in `src/sections/`
2. Import and add to `src/App.tsx`
3. Add navigation link in `src/components/custom/Navigation.tsx`

### Updating SEO Meta Tags

Edit `index.html`:

```html
<title>Your Title</title>
<meta name="description" content="Your description" />
<meta property="og:title" content="Your Title" />
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## License

This project is private and proprietary. All rights reserved.

## Contact

- **Email**: hi@gmacovei.com
- **Website**: https://gmacovei.com
- **RielArt**: https://rielart.com
- **Spotix**: https://myspotix.com

---

Built with ❤️ by Gabriel Macovei
