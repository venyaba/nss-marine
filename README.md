# NSS Marine Services

Professional marine survey services landing page built with Next.js 14 and CSS Modules.

## Features

- 🚢 Marine industry focused design
- 📱 Responsive layout
- ♿ WCAG AA accessibility compliance
- 🎨 CSS Modules for styling
- ⚡ Next.js App Router
- 🎬 Video background hero section

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   └── (site)/
│       ├── layout.tsx      # Root layout with navigation
│       ├── page.tsx        # Home page
│       └── globals.css      # Global styles
├── components/
│   └── ui/                 # Reusable UI components
├── lib/
│   └── content.ts          # Content data
├── styles/
│   └── theme.css           # CSS variables and utilities
└── public/                 # Static assets
```

## Customization

Update the content in `lib/content.ts` to customize:
- Company information
- Services offered
- Contact details
- Social media links

## Assets

Replace placeholder files in `/public/`:
- `logo.svg` - Company logo
- `og.jpg` - Open Graph image (1200x630px)
- `favicon.ico` - Site favicon
- `hero.mp4` - Hero background video

## Styling

The project uses CSS Modules and CSS variables defined in `styles/theme.css`. The color palette is optimized for marine industry branding with high contrast for accessibility.
