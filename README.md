# NSS Marine Services Website

A modern, responsive website for Nautical Survey Solutions built with Next.js 14, featuring dynamic logo switching, marine-themed design, and smooth animations.

## 🚀 Features

- **Dynamic Logo Switching**: Automatically changes logo based on background (dark/light sections)
- **Marine Theme**: Ocean-inspired color palette and design elements
- **Responsive Design**: Mobile-first approach with smooth animations
- **SEO Optimized**: Meta tags, OpenGraph, Twitter cards, robots.txt, sitemap.xml
- **Performance**: Optimized images, lazy loading, font preloading
- **Modern Stack**: Next.js 14 App Router, TypeScript, CSS Modules
- **Interactive Elements**: Scroll animations, contact form with honeypot protection

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + Global CSS
- **Icons**: Custom SVG icons
- **Animations**: IntersectionObserver-based reveal effects
- **Form Handling**: API routes with spam protection

## 📁 Project Structure

```
├── app/
│   ├── (site)/
│   │   ├── layout.tsx      # Root layout with header/footer
│   │   ├── page.tsx        # Main page with all sections
│   │   ├── Header.tsx      # Dynamic header component
│   │   └── Header.module.css
│   ├── api/contact/        # Contact form API
│   └── globals.css         # Global styles
├── components/
│   ├── TeamSection.tsx     # Team section component
│   └── ui/                 # Reusable UI components
├── hooks/
│   ├── useReveal.ts        # Scroll animation hook
│   └── useActiveSection.ts # Active navigation hook
├── lib/
│   └── content.ts          # Content configuration
├── public/                 # Static assets
└── styles/
    └── theme.css           # CSS variables and utilities
```

## 🎨 Sections

1. **Hero**: Video background with call-to-action buttons
2. **Benefits**: Why choose NSS with animated cards
3. **Services**: Comprehensive marine survey services
4. **Process**: Visual process gallery with images
5. **Service Areas**: German ports coverage
6. **Team**: Meet the experts with LinkedIn integration
7. **Contact**: Contact form with validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nss
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## ⚙️ Configuration

Edit `lib/content.ts` to customize:
- Company information
- Services and benefits
- Team members
- Contact details
- Social media links

## 🎯 Key Features Explained

### Dynamic Logo Switching
The header automatically switches between:
- `nss-white-wave.png` (for dark backgrounds)
- `nss.png` (for light backgrounds)

### Scroll Animations
Uses IntersectionObserver for smooth reveal effects:
- `.reveal` - fade in from bottom
- `.revealRight` - slide in from right
- `.revealDown` - slide down from top
- `.revealScale` - scale in effect

### Contact Form
- HTML5 validation
- Honeypot spam protection
- API route handling
- Success/error feedback

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 768px (md), 1024px (lg)
- Touch-friendly navigation
- Optimized images for all devices

## 🔧 Customization

### Colors
Edit CSS variables in `styles/theme.css`:
```css
:root {
  --bg: #0b1220;
  --surface: #0f1a2d;
  --text: #e6edf6;
  --primary: #4cc9f0;
  --accent: #a78bfa;
}
```

### Content
Update `lib/content.ts` for all text content and configuration.

## 📄 License

This project is proprietary software for Nautical Survey Solutions.

## 🤝 Support

For support or questions, please contact the development team.