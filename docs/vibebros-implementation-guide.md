# VibeBros Community - Next.js Implementation Blueprint

## 📦 Complete Tech Stack & Setup Guide

### Technologies
- **Framework:** Next.js 14+ (App Router)
- **UI Framework:** React 18+
- **Styling:** CSS3 with custom properties
- **Animation:** Native CSS @keyframes + GSAP (optional, ScrollTrigger for advanced)
- **3D Graphics:** Three.js + React Three Fiber (optional)
- **Image Optimization:** Next.js Image component
- **Type Safety:** TypeScript (recommended)
- **Package Manager:** npm/pnpm
- **Deployment:** Vercel (recommended for Next.js)

---

## 🏗️ Project Structure

```
vibebros-website/
├── app/
│   ├── layout.tsx                    # Root layout with metadata
│   ├── page.tsx                      # Home page
│   └── globals.css                   # Design system & animations
│
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── CommunitySection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   │
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Stat.tsx
│   │
│   └── 3d/
│       ├── RotatingCube.tsx          # Three.js optional
│       └── FloatingIcons.tsx
│
├── public/
│   ├── images/
│   │   ├── hero-bg.webp
│   │   └── [other images]
│   │
│   └── 3d-models/
│       ├── scene.glb                 # Compressed 3D models
│       └── [other models]
│
├── styles/
│   ├── globals.css                   # Main stylesheet
│   └── variables.css                 # CSS custom properties
│
├── lib/
│   ├── constants.ts                  # Colors, spacing constants
│   ├── animations.ts                 # Animation configs
│   └── utils.ts                      # Helper functions
│
└── next.config.js                    # Next.js configuration
```

---

## 📄 Code Examples

### 1. Root Layout (app/layout.tsx)

```tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VibeBros Community - Feel the Vibe. Join the Crew.',
  description: 'A thriving Discord community for creative minds, gamers, artists, and tech enthusiasts. Connect, collaborate, and celebrate together.',
  keywords: 'Discord community, gaming, creative, tech, collaboration',
  openGraph: {
    title: 'VibeBros Community',
    description: 'Join thousands of members building something amazing together.',
    type: 'website',
    url: 'https://vibebros.community',
    images: [{
      url: 'https://vibebros.community/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1c1d22" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
```

### 2. Global Styles with Design System (styles/globals.css)

```css
:root {
  /* Primary Colors */
  --color-bg-primary: #1c1d22;
  --color-bg-secondary: #2b2d31;
  --color-bg-tertiary: #36393f;
  --color-text-primary: #ffffff;
  --color-text-secondary: #b5bac1;
  --color-text-muted: #72767d;

  /* Accent Colors */
  --color-accent-primary: #5865f2;
  --color-accent-pink: #eb459e;
  --color-accent-cyan: #00d4ff;
  --color-accent-success: #57f287;
  --color-accent-warning: #fee75c;
  --color-accent-danger: #ed4245;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Typography */
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  --font-family-mono: 'Berkeley Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Animations */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
  --easing-standard: cubic-bezier(0.16, 1, 0.3, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-family: var(--font-family-base);
  font-size: 16px;
  line-height: 1.5;
  overflow-x: hidden;
}

/* ANIMATIONS */

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes rotateCube {
  from { transform: rotateX(0deg) rotateY(0deg); }
  to { transform: rotateX(360deg) rotateY(360deg); }
}

/* SCROLL SECTIONS */

.scroll-section {
  opacity: 0;
  transform: translateY(40px);
  transition: all var(--duration-slow) var(--easing-standard);
  will-change: transform, opacity;
}

.scroll-section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* BUTTONS */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-md) var(--space-lg);
  height: 48px;
  border: none;
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--duration-normal) var(--easing-standard);
  text-decoration: none;
  position: relative;
  white-space: nowrap;
}

.btn--primary {
  background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-pink) 100%);
  color: var(--color-text-primary);
  box-shadow: 0 8px 24px rgba(88, 101, 242, 0.3);
}

.btn--primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(88, 101, 242, 0.4);
}

.btn--primary:active {
  transform: translateY(-1px);
}

.btn--primary:focus-visible {
  outline: 2px solid var(--color-accent-primary);
  outline-offset: 2px;
}

.btn--secondary {
  background: rgba(88, 101, 242, 0.15);
  color: var(--color-accent-primary);
  border: 1px solid rgba(88, 101, 242, 0.3);
}

.btn--secondary:hover {
  background: rgba(88, 101, 242, 0.25);
  border-color: rgba(88, 101, 242, 0.5);
}

/* CARDS */

.card {
  background: rgba(43, 45, 49, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: var(--space-xl);
  transition: all var(--duration-normal) var(--easing-standard);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(88, 101, 242, 0.5) 50%, transparent 100%);
}

.card:hover {
  background: rgba(54, 57, 63, 0.6);
  border-color: rgba(88, 101, 242, 0.5);
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(88, 101, 242, 0.15);
}

/* RESPONSIVE */

@media (max-width: 768px) {
  html {
    font-size: 14px;
  }

  .container {
    padding: 0 var(--space-md);
  }
}

/* REDUCED MOTION */

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 3. Button Component (components/common/Button.tsx)

```tsx
import React from 'react';
import '../styles/button.css'; // Optional: separate CSS file

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, className, ...props }, ref) => {
    const baseClasses = `btn btn--${variant} btn--${size}`;
    
    if (href) {
      return (
        <a href={href} className={`${baseClasses} ${className || ''}`}>
          {props.children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${className || ''}`}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

### 4. Hero Section (components/sections/HeroSection.tsx)

```tsx
'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/common/Button';
import Image from 'next/image';
import logoImage from '@/public/logo.jpg';

export const HeroSection: React.FC = () => {
  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      const hero3dContainer = document.querySelector('.hero__3d-container');
      if (hero3dContainer) {
        const scrolled = window.pageYOffset;
        (hero3dContainer as HTMLElement).style.transform =
          `translateY(calc(-50% + ${scrolled * 0.3}px))`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero__background"></div>

      <div className="hero__content">
        <div className="hero__badge">✨ Welcome to VibeBros</div>
        
        <h1 className="hero__title">
          Feel the Vibe. Join the Crew.
        </h1>
        
        <p className="hero__subtitle">
          VibeBros is a thriving Discord community where creative minds, gamers,
          artists, and tech enthusiasts connect, collaborate, and celebrate
          together. Find your people. Level up. Vibe with us.
        </p>

        <div className="hero__cta">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const el = document.getElementById('community');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join Community
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              const el = document.getElementById('features');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Logo Image */}
      <div className="hero__3d-container">
        <Image
          src={logoImage}
          alt="VibeBros Logo"
          width={300}
          height={300}
          priority
          quality={85}
          className="hero__logo"
        />
      </div>
    </section>
  );
};
```

### 5. Features Section (components/sections/FeaturesSection.tsx)

```tsx
'use client';

import React, { useEffect } from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '👥',
    title: 'Global Community',
    description:
      'Connect with like-minded people from around the world. Build friendships that matter.',
  },
  {
    icon: '🎯',
    title: 'Organized Channels',
    description:
      'Dedicated spaces for gaming, art, tech, events, and more. Find exactly what you're into.',
  },
  {
    icon: '🎉',
    title: 'Regular Events',
    description:
      'Game nights, art contests, AMAs, and community challenges. Always something happening.',
  },
  {
    icon: '🏆',
    title: 'Recognition Program',
    description:
      'Earn roles and badges as you contribute. Your vibe, your reputation, your reward.',
  },
  {
    icon: '🛡️',
    title: 'Safe Space',
    description:
      'Moderation, clear rules, and inclusive policies. Everyone's welcome here.',
  },
  {
    icon: '💡',
    title: 'Collaboration Hub',
    description:
      'Team up on projects, share knowledge, grow skills together. Support at every level.',
  },
];

export const FeaturesSection: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-section').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.scroll-section').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="features" className="features">
      <div className="features__container">
        <div className="features__header scroll-section">
          <h2 className="features__title">Why VibeBros?</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px' }}>
            Everything you need for an amazing community experience
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card scroll-section">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### 6. Home Page (app/page.tsx)

```tsx
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { CommunitySection } from '@/components/sections/CommunitySection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <CTASection />
      <Footer />
    </main>
  );
}
```

---

## 🚀 Next.js Configuration (next.config.js)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression
  compress: true,

  // Production source maps (disable for smaller bundles)
  productionBrowserSourceMaps: false,

  // Experimental features
  experimental: {
    optimizePackageImports: ['components'],
  },
};

module.exports = nextConfig;
```

---

## 📦 Required Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "typescript": "^5.0.0"
  },
  "optionalDependencies": {
    "gsap": "^3.12.0",
    "three": "^r160",
    "@react-three/fiber": "^8.14.0",
    "@react-three/drei": "^9.88.0"
  }
}
```

### Installation

```bash
# Create Next.js app
npx create-next-app@latest vibebros-website --typescript --tailwind=false

# Install optional 3D packages
npm install gsap three @react-three/fiber @react-three/drei

# Install image optimization
npm install sharp
```

---

## 🎨 CSS Best Practices in Components

### ✅ DO: Use CSS Variables

```tsx
<div style={{ color: 'var(--color-text-primary)' }}>Text</div>
```

### ❌ DON'T: Hardcode Colors

```tsx
<div style={{ color: '#ffffff' }}>Text</div>
```

### ✅ DO: Use External CSS Files

```css
/* button.css */
.btn--primary {
  background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-pink) 100%);
}
```

### ❌ DON'T: Inline Complex Styles

```tsx
<button style={{ background: 'linear-gradient(...)', boxShadow: '...' }}>
```

---

## 🔄 Scroll Animation Pattern

```tsx
'use client';

import { useEffect } from 'react';

export const ScrollAnimationWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
};
```

---

## 🧪 Testing Checklist

```bash
# Build locally
npm run build

# Run Lighthouse
npm run lighthouse

# Check for unused CSS
npm run analyze:css

# Check bundle size
npm run analyze:bundle

# Test accessibility
npm run a11y
```

---

## 📈 Performance Optimization Tips

1. **Image Optimization**
   - Use Next.js `<Image>` component
   - Serve WebP format
   - Lazy-load off-screen images
   - Max size: 200KB per image

2. **Code Splitting**
   - Lazy-load sections below the fold
   - Use `dynamic()` for optional features
   - Split CSS by route

3. **Animation Performance**
   - Use `will-change: transform` on animated elements
   - Prefer `transform` over `top/left`
   - Limit simultaneous animations to 3-4
   - Test on low-end devices

4. **3D Model Optimization**
   - Compress with Draco (.glb format)
   - Lazy-load with `ssr: false`
   - Host on CDN
   - Use LOD (Level of Detail) for complex models

---

## 🚀 Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy with environment variables
vercel env pull
vercel deploy --prod
```

**Vercel Configurations:**
- Automatic image optimization
- Built-in CDN for assets
- Edge functions for API routes
- Analytics included

---

## ✅ Final Verification

Before launch:
1. ✅ Lighthouse score ≥90 (Performance)
2. ✅ All pages load <3s
3. ✅ Responsive at 320px, 768px, 1024px
4. ✅ All animations smooth (60fps)
5. ✅ Zero console errors
6. ✅ WCAG AA accessibility
7. ✅ Tested on real mobile device
8. ✅ SEO metadata correct
9. ✅ Social share preview correct
10. ✅ 404 page configured

---

**Ready to build! Use this blueprint alongside the design system and handoff documents.**

