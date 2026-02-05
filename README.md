# Yamagishi Lab Website

東京農工大学 山岸研究室の公式ウェブサイト

**Live Site**: https://yamagishi-lab.vercel.app

## Overview

超薄膜エレクトロニクスと柔軟電子デバイスの研究を行う山岸研究室のウェブサイトです。日本語・英語の多言語対応、レスポンシブデザインを採用しています。

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Deployment**: Vercel
- **i18n**: Custom implementation with JSON dictionaries

## Features

- Multi-language support (Japanese / English)
- Responsive design (Mobile / Tablet / Desktop)
- Smooth animations with Framer Motion
- Image carousel on hero section
- Static site generation for optimal performance

## Project Structure

```
src/
├── app/
│   └── [locale]/          # Locale-based routing
│       ├── page.tsx       # Home page
│       ├── research/      # Research page
│       ├── team/          # Team page
│       ├── achievements/  # Publications page
│       ├── news/          # News page
│       └── contact/       # Contact page
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections
│   ├── ui/                # Reusable UI components
│   └── animations/        # Animation wrappers
├── dictionaries/          # i18n JSON files
│   ├── ja.json
│   └── en.json
├── lib/                   # Utilities
└── types/                 # TypeScript types
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/FallseF/yamagishi-lab.git
cd yamagishi-lab

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Production build
npm run build

# Start production server
npm start
```

## Deployment

This project is configured for automatic deployment on Vercel. Push to `main` branch to trigger a new deployment.

## Customization

### Adding/Editing Content

Content is managed through dictionary files:
- `src/dictionaries/ja.json` - Japanese content
- `src/dictionaries/en.json` - English content

### Adding Images

Place images in `public/images/` directory. Current images:
- `hero-robothand.jpg` - Hero carousel image
- `team-photo.jpg` - Team section photo
- `profile.jpg` - PI profile photo
- `research1.png`, `research2.png`, `research3.png` - Research area images
- `tuat-logo.jpg` - University logo

## License

All rights reserved. This project is for the Yamagishi Laboratory at Tokyo University of Agriculture and Technology.

## Contact

For inquiries about the website:
- 横田研究室 青木
- Email: aoki@ntech.t.u-tokyo.ac.jp
