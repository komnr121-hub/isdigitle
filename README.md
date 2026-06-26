# IsDigitle — Premium Digital Agency Website

A complete, production-ready Next.js 14 website for IsDigitle digital agency platform.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| UI Components | Custom + Radix UI |
| Icons | Lucide React |
| Fonts | Space Grotesk + Inter (Google Fonts) |
| Deployment | Vercel (recommended) |

---

## 📁 Project Structure

```
isdigitle/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── layout.tsx                # Root layout (Navbar + Footer + SEO)
│   │   ├── page.tsx                  # Home page
│   │   ├── about/page.tsx            # About Us
│   │   ├── blog/page.tsx             # Blog listing
│   │   ├── book-consultation/page.tsx # Book a Call
│   │   ├── contact/page.tsx          # Contact
│   │   ├── partners/page.tsx         # Partner Network
│   │   ├── portfolio/page.tsx        # Portfolio / Case Studies
│   │   ├── pricing/page.tsx          # Pricing
│   │   └── services/
│   │       ├── page.tsx              # Services overview
│   │       ├── seo/page.tsx          # SEO Services
│   │       ├── web-development/page.tsx
│   │       ├── web-design/page.tsx
│   │       ├── amazon/page.tsx
│   │       └── digital-marketing/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Sticky nav with dropdowns
│   │   │   └── Footer.tsx            # Full footer with newsletter
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Animated hero
│   │   │   ├── ServicesSection.tsx   # Services grid
│   │   │   ├── HomeSections.tsx      # Why Us / Process / Testimonials / FAQ / CTA
│   │   │   ├── PortfolioSection.tsx  # Case studies grid
│   │   │   ├── PricingSection.tsx    # Pricing cards
│   │   │   └── PartnersMarquee.tsx   # Scrolling partner logos
│   │   └── ui/
│   │       └── index.tsx             # Button, Badge, Card, SectionHeading, GlowOrb
│   ├── lib/
│   │   ├── data.ts                   # All site content / copy
│   │   └── utils.ts                  # Utility functions (cn, formatNumber)
│   └── styles/
│       └── globals.css               # Tailwind + custom CSS variables
├── public/
│   └── (add og-image.jpg, logo.svg, favicon.ico here)
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js 18.17+
- npm or yarn or pnpm

### Installation

```bash
# 1. Navigate to the project
cd isdigitle

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000
```

---

## 🌐 Deploy to Vercel (Recommended)

### Method 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy from project root
vercel

# For production
vercel --prod
```

### Method 2: GitHub + Vercel Dashboard

1. Push this project to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live in ~2 minutes

### Environment Variables (Optional)
Add these in Vercel Dashboard → Settings → Environment Variables:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # Google Analytics
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/isdigitle
NEXT_PUBLIC_WHATSAPP=+923000000000
```

---

## 🎨 Customization Guide

### 1. Update Brand Content
Edit `src/lib/data.ts` — this is the single source of truth for all content:
- `SITE` — name, email, phone, socials
- `SERVICES` — service list with descriptions
- `TESTIMONIALS` — client testimonials
- `PORTFOLIO` — case studies
- `PRICING_PLANS` — pricing tiers
- `PROCESS_STEPS` — how-we-work steps
- `FAQS` — FAQ content

### 2. Update Colors
Edit `tailwind.config.ts` → `theme.extend.colors`:
```ts
electric: '#6C63FF',   // Primary accent (purple)
plasma:   '#00D4FF',   // Secondary accent (cyan)
gold:     '#F4C542',   // Highlight (yellow)
obsidian: '#0A0A0F',   // Main background
```

### 3. Update Fonts
Replace Google Fonts URL in:
- `src/app/layout.tsx` (link tag)
- `src/styles/globals.css` (@import)
- `tailwind.config.ts` (fontFamily)

### 4. Add Real Portfolio Images
Replace `picsum.photos` URLs in `src/lib/data.ts` with your actual project screenshots.

### 5. Integrate Calendly
In `src/app/book-consultation/page.tsx`, replace the placeholder div with:
```tsx
<div
  className="calendly-inline-widget"
  data-url="https://calendly.com/YOUR_USERNAME/strategy-call"
  style={{ minWidth: '320px', height: '700px' }}
/>
<script
  type="text/javascript"
  src="https://assets.calendly.com/assets/external/widget.js"
  async
/>
```

### 6. Add Contact Form Backend
Connect the form in `src/app/contact/page.tsx` to:
- **Resend** (recommended): `npm install resend`
- **EmailJS**: Client-side email sending
- **Formspree**: No-code form backend
- **Custom Next.js API route**: Create `src/app/api/contact/route.ts`

Example API route:
```ts
// src/app/api/contact/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  // Send email via Resend/Nodemailer
  return NextResponse.json({ success: true })
}
```

---

## 📊 SEO Configuration

### Meta Tags
Edit the `metadata` export in each page file and `src/app/layout.tsx`.

### Schema Markup
Organization schema is already included in `layout.tsx`. Add page-specific schema:
```tsx
// In any page
<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services",
    "provider": { "@type": "Organization", "name": "IsDigitle" }
  })
}} />
```

### Sitemap
Add to `src/app/sitemap.ts`:
```ts
export default function sitemap() {
  return [
    { url: 'https://isdigitle.com', lastModified: new Date() },
    { url: 'https://isdigitle.com/services', lastModified: new Date() },
    // ... all pages
  ]
}
```

### Robots.txt
Add `src/app/robots.ts`:
```ts
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://isdigitle.com/sitemap.xml',
  }
}
```

---

## 🖼️ Required Assets

Add these to `/public/`:

| File | Dimensions | Purpose |
|---|---|---|
| `og-image.jpg` | 1200×630px | Social sharing preview |
| `logo.svg` | Vector | SVG logo |
| `favicon.ico` | 32×32px | Browser tab icon |
| `apple-touch-icon.png` | 180×180px | iOS home screen |

---

## 📦 Production Checklist

- [ ] Replace all `picsum.photos` images with real project images
- [ ] Update `SITE` object in `data.ts` with real contact details
- [ ] Add real Google Analytics ID
- [ ] Connect contact form to email backend
- [ ] Integrate real Calendly URL
- [ ] Add `og-image.jpg` (1200×630)
- [ ] Add `favicon.ico` and `logo.svg`
- [ ] Update Google Search Console verification code in `layout.tsx`
- [ ] Add real testimonials and portfolio projects
- [ ] Test all forms
- [ ] Run `npm run build` and fix any build errors
- [ ] Deploy to Vercel

---

## 🔌 CMS Integration (Optional)

To make content editable without code, integrate with:

### Sanity CMS
```bash
npm install @sanity/client @sanity/image-url
```

### Contentful
```bash
npm install contentful
```

### Notion as CMS
```bash
npm install @notionhq/client
```

---

## 📞 Support

Built by the IsDigitle team. For customization support, contact:
- Email: hello@isdigitle.com
- WhatsApp: +92 300 0000000

---

## License
Private use only. All rights reserved — IsDigitle © 2025
