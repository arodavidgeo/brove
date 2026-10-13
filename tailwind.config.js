/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Core BROVE Palette
        brove: {
          yellow: "#F2D400",
          paper: "#F4F1E6",
          charcoal: "#2A2A24",
          graphite: "#3A3A34",
          white: "#FFFFFF",
          ink: "#66645A",
          border: "#E6E2D3",
          highlight: "#FFF6A8",
        },

        // Primary Tokens
        primary: {
          DEFAULT: "#C5D92D",
          container: "#C5D92D",
          fixed: "#D8EB3E",
          "fixed-dim": "#B8CC22",
          foreground: "#2A2A24",
        },
        "primary-container": "#C5D92D",
        "primary-fixed": "#D8EB3E",
        "primary-fixed-dim": "#B8CC22",

        // Studio Surfaces - Converted to Soft Light Palette (#F4F1E6, #FAF8F0, #FFFFFF)
        surface: "#F4F1E6",
        "surface-paper": "#F4F1E6",
        "surface-dark": "#FAF8F0",
        "surface-dark-secondary": "#FFFFFF",
        "surface-white": "#FFFFFF",
        "surface-container": "#FAF8F0",
        "surface-container-low": "#FFFFFF",
        "surface-container-high": "#F4F1E6",
        "surface-container-highest": "#E6E2D3",
        "surface-bright": "#FAF8F0",
        "surface-dim": "#E6E2D3",

        // Typography colors
        "text-primary": "#2A2A24",
        "text-on-dark": "#2A2A24",
        "text-muted": "#66645A",
        "border-neutral": "#E6E2D3",

        background: "#F4F1E6",
        foreground: "#2A2A24",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#2A2A24",
        },
        muted: {
          DEFAULT: "#FAF8F0",
          foreground: "#66645A",
        },
        border: "#E6E2D3",
      },
      fontFamily: {
        display: ['var(--font-display)', '"Bodoni Moda"', 'Georgia', 'serif'],
        condensed: ['var(--font-condensed)', '"Barlow Condensed"', 'sans-serif'],
        body: ['var(--font-body)', '"DM Sans"', 'sans-serif'],
        sans: ['var(--font-body)', '"DM Sans"', 'sans-serif'],
        headline: ['var(--font-display)', '"Bodoni Moda"', 'Georgia', 'serif'],
        mono: ['var(--font-condensed)', '"Barlow Condensed"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
      spacing: {
        gutter: "1.5rem",
        "gutter-mobile": "0.75rem",
        margin: "2.5rem",
        "margin-mobile": "1rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
