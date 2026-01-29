# Luna Bistro - Modern Restaurant Website

A sophisticated, high-conversion restaurant website built with React 19, TypeScript, Tailwind CSS 4, and Vite. Designed for urban professionals seeking quality dining experiences.

## 🎨 Design Philosophy

**Sophisticated Minimalism with Warm Accents**

- **Color Palette**: Dark charcoal backgrounds, warm beige typography, muted gold accents
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body
- **Animations**: Smooth fade-in, slide-in, and hover effects for premium feel
- **Layout**: Asymmetric grid with generous whitespace emphasizing quality

## ✨ Features

- **Hero Section** - Full-width ambiance image with compelling headline
- **Interactive Menu** - Tab-based menu system with 4 categories (Starters, Mains, Desserts, Drinks)
- **About Section** - Chef story with professional imagery
- **Gallery** - Image showcase with hover animations
- **Reservation Form** - Fully functional booking form with validation
- **Contact Information** - Location, phone, hours, and social links
- **Responsive Design** - Mobile-first approach, optimized for all devices
- **Dark Theme** - Premium dark mode with warm accents
- **Smooth Animations** - Scroll-triggered reveals and interactive transitions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/prince-build-stack-ship/Demo-site-restaurant-1.git
cd Demo-site-restaurant-1

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Type checking
pnpm check

# Format code
pnpm format
```

The development server will start at `http://localhost:3000`

## 📁 Project Structure

```
luna-bistro/
├── client/
│   ├── public/
│   │   └── images/              # Restaurant images
│   │       ├── hero-ambiance.jpg
│   │       ├── hero-food.jpg
│   │       ├── menu-showcase.jpg
│   │       └── chef-craft.jpg
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # shadcn/ui components
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   └── [others]
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── Map.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   ├── Home.tsx         # Main homepage
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css            # Global styles with animations
│   └── index.html
├── server/
│   └── index.ts                 # Express server
├── shared/
│   └── const.ts
├── package.json
├── vite.config.ts
├── tsconfig.json
└── COMPLETE_CODE_STRUCTURE.md   # Detailed code documentation
```

## 🎯 Key Pages

### Home (`/`)
- **Hero Section**: Dramatic ambiance image with headline and CTAs
- **Value Proposition**: 3-column layout highlighting fresh ingredients, chef expertise, ambiance
- **Menu**: Interactive tabs for Starters, Mains, Desserts, Drinks
- **About**: Chef story with professional imagery
- **Gallery**: Food and interior photography
- **Reservation Form**: Complete booking system
- **Contact**: Location, phone, hours, social links

### 404 (`/404`)
- Custom error page with navigation back to home

## 🎨 Design System

### Colors (OKLCH Format)
- **Background**: `oklch(0.12 0.01 280)` - Dark Charcoal
- **Foreground**: `oklch(0.92 0.01 45)` - Warm Beige
- **Primary/Accent**: `oklch(0.55 0.15 45)` - Muted Gold
- **Card**: `oklch(0.18 0.01 280)` - Slightly Lighter Charcoal

### Typography
- **Headings**: Playfair Display, 700 weight, -0.02em letter-spacing
- **Body**: Inter, 400 weight
- **Sizes**: H1 (5xl-6xl), H2 (4xl-5xl), H3 (2xl-3xl)

### Animations
- **Fade In Up**: 0.6s ease-out (elements entering from bottom)
- **Fade In**: 0.6s ease-out (simple opacity)
- **Slide In Left**: 0.6s ease-out (elements from left)
- **Hover Effects**: 0.3s ease for buttons, 0.5s ease for images

## 🛠 Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript 5.6
- **Styling**: Tailwind CSS 4 with OKLCH colors
- **Build Tool**: Vite 7
- **UI Components**: shadcn/ui (Radix UI + CVA)
- **Routing**: Wouter
- **Icons**: Lucide React
- **Server**: Express.js
- **Package Manager**: pnpm

## 📦 Available Scripts

```bash
# Development
pnpm dev              # Start dev server with hot reload
pnpm preview          # Preview production build

# Production
pnpm build            # Build for production
pnpm start            # Start production server

# Quality
pnpm check            # TypeScript type checking
pnpm format           # Format code with Prettier
```

## 🔧 Configuration

### Vite Config (`vite.config.ts`)
- React plugin with JSX location tracking
- Tailwind CSS 4 integration
- Path aliases (`@/*`, `@shared/*`)
- Debug collector for browser logs
- Manus runtime plugin

### TypeScript Config (`tsconfig.json`)
- Strict mode enabled
- ESNext module system
- Path aliases for imports
- DOM and Node.js types

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (base styles)
- **Tablet**: 640px - 1023px (sm breakpoint)
- **Desktop**: ≥ 1024px (md breakpoint)

All components use mobile-first approach with responsive utilities.

## 🎯 Conversion Optimization

- **Clear CTAs**: "View Menu" and "Reserve a Table" buttons throughout
- **Compelling Headline**: "Where Flavor Meets Atmosphere"
- **Trust Signals**: Chef story, professional imagery, detailed menu
- **Easy Reservation**: Simple form with all necessary fields
- **Contact Info**: Multiple ways to reach (phone, email, map)
- **Social Proof**: Social media links

## 🚀 Deployment

### Build for Production
```bash
pnpm build
```

This creates optimized static files in `dist/public/` ready for deployment.

### Deploy to Manus
The project includes built-in support for Manus deployment with:
- Automatic analytics integration
- Environment variable injection
- OAuth support
- File storage capabilities

### Deploy Elsewhere
The built files can be deployed to any static hosting:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any web server

## 📄 Documentation

See `COMPLETE_CODE_STRUCTURE.md` for:
- Detailed file-by-file code documentation
- Component API reference
- Design system specifications
- Installation and setup guide

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📝 License

MIT License - feel free to use this project for commercial purposes.

## 👨‍💼 About Luna Bistro

Luna Bistro is a modern restaurant website template designed for fine dining establishments. The design emphasizes quality, sophistication, and user experience to maximize reservations and customer engagement.

**Key Metrics:**
- Mobile-responsive on all devices
- Optimized for conversion
- Accessibility-first design
- Performance-optimized images
- SEO-friendly structure

## 📞 Support

For issues, questions, or suggestions:
1. Check `COMPLETE_CODE_STRUCTURE.md` for detailed documentation
2. Review the code comments in component files
3. Open an issue on GitHub

---

**Built with ❤️ for restaurant owners and diners who appreciate quality.**
