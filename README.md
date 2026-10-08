# BROVE — Custom Apparel & Streetwear Studio

Official web application for **BROVE**, a custom apparel and T-shirt printing studio specializing in DTF printing, embroidery, premium blanks, and batch manufacturing.

## Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Design System
- **Animations & Smooth Scroll**: GSAP + Lenis + Motion
- **Icons**: Lucide React
- **Routing**: React Router v6

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm / pnpm / yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```text
├── public/                 # Static assets, logo variants, and product samples
├── src/
│   ├── components/         # UI, layout, customization & pricing components
│   ├── context/            # React state context (Cart, etc.)
│   ├── data/               # Product catalog, pricing tables, FAQ & content
│   ├── hooks/              # Custom React hooks (Lenis, GSAP, etc.)
│   ├── pages/              # Routed pages (Home, Wardrobe, Customize, Checkout, etc.)
│   ├── types/              # TypeScript interfaces and type definitions
│   ├── App.tsx             # Main routing configuration
│   ├── index.css           # Global typography, color tokens, and utility styles
│   └── main.tsx            # Entry point
├── index.html              # HTML shell
├── tailwind.config.js      # Tailwind theme configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build config
```

## License

Private / All Rights Reserved.
