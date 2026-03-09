# Velmora – Luxury Wellness & Beauty

A sophisticated, elegantly crafted React + Vite website for Velmora, a luxury wellness and beauty brand.

## Tech Stack

- **React 18** with functional components and hooks
- **Vite 5** for lightning-fast development and builds
- **React Router v6** for client-side routing
- **CSS Modules** (per-component CSS files) for scoped, maintainable styles
- **Google Fonts**: Cormorant Garamond (serif headings) + Jost (clean body text)
- **No external images** — all visuals use CSS gradients and decorative shapes

## Brand Palette

| Name       | Hex       | Usage                    |
|------------|-----------|--------------------------|
| Rose Gold  | `#c9a96e` | Primary accent, CTAs     |
| Near Black | `#1a1a1a` | Text, dark backgrounds   |
| Cream      | `#f5e6d3` | Light backgrounds, cards |
| Burgundy   | `#8b4a6b` | Secondary accent         |
| White      | `#ffffff` | Surfaces, text on dark   |

## Pages & Routes

| Route       | Component          | Description                                          |
|-------------|-------------------|------------------------------------------------------|
| `/`         | `Home`            | Hero, featured products, brand story, rituals, testimonials, newsletter |
| `/products` | `Products`        | Tabbed collections: Skincare (4), Body Wellness (3), Aromatherapy (3) |
| `/about`    | `About`           | Philosophy, founder story, sustainability, certifications |
| `/contact`  | `Contact`         | Elegant form with validation, boutique info, appointments |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── main.jsx              # React entry point with BrowserRouter
├── App.jsx               # Root component with routes
├── App.css               # Root layout styles
├── index.css             # Global CSS variables, typography, utilities
├── components/
│   ├── Navbar.jsx        # Fixed navbar with transparent/scrolled state, mobile menu
│   ├── Navbar.css
│   ├── Footer.jsx        # Sophisticated dark footer with social links
│   └── Footer.css
└── pages/
    ├── Home.jsx / Home.css
    ├── About.jsx / About.css
    ├── Products.jsx / Products.css
    └── Contact.jsx / Contact.css
```

## Key Features

- **Transparent hero navbar** that transitions to solid white on scroll
- **Animated mobile menu** slides in from the right
- **CSS-only gradient visuals** — no external image dependencies
- **Marquee text strip** with CSS animation
- **Tabbed product collections** with smooth fade-in transitions
- **Accessible contact form** with client-side validation and success state
- **Fully responsive** — designed mobile-first with breakpoints at 600px, 768px, 900px, 1024px
- **Custom scrollbar** styled to match brand
- **Smooth scroll** behaviour enabled globally
