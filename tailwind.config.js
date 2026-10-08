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
        // Stitch Primary Tokens
        primary: {
          DEFAULT: "#6c5e00",
          container: "#f2d400",
          fixed: "#ffe33f",
          "fixed-dim": "#e2c600",
          foreground: "#171717",
        },
        "primary-container": "#f2d400",
        "primary-fixed": "#ffe33f",
        "primary-fixed-dim": "#e2c600",

        // Studio Surfaces
        surface: "#fcf9f0",
        "surface-paper": "#F5F2E9",
        "surface-dark": "#171717",
        "surface-dark-secondary": "#2A2A2A",
        "surface-white": "#FFFFFF",
        "surface-container": "#f1eee5",
        "surface-container-low": "#f6f3ea",
        "surface-container-high": "#ebe8df",
        "surface-container-highest": "#e5e2da",
        "surface-bright": "#fcf9f0",
        "surface-dim": "#dddad1",

        // Typography colors
        "text-primary": "#171717",
        "text-on-dark": "#F5F2E9",
        "text-muted": "#6F6B62",
        "on-surface": "#1c1c17",
        "on-surface-variant": "#4c4732",
        "border-neutral": "#E5DFD3",

        // Legacy / helper aliases for compatibility
        brove: {
          yellow: "#F2D400",
          paper: "#F5F2E9",
          charcoal: "#171717",
          graphite: "#2A2A2A",
          ink: "#6F6B62",
          border: "#E5DFD3",
          highlight: "#FFF6A8",
        },
        background: "#F5F2E9",
        foreground: "#171717",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#171717",
        },
        muted: {
          DEFAULT: "#ebe8df",
          foreground: "#6F6B62",
        },
        border: "#E5DFD3",
      },
      fontFamily: {
        headline: ['"Anton"', '"Bebas Neue"', 'sans-serif'],
        display: ['"Anton"', '"Bebas Neue"', 'sans-serif'],
        sans: ['"Manrope"', '"Outfit"', 'sans-serif'],
        body: ['"Manrope"', '"Outfit"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        brush: ['"Permanent Marker"', 'cursive'],
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
