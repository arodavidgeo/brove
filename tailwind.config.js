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
          paper: "#F5F2E9",
          charcoal: "#171717",
          graphite: "#292929",
          white: "#FFFFFF",
          ink: "#66645F",
          border: "#D8D3C7",
          highlight: "#FFF6A8",
        },

        // Primary Tokens
        primary: {
          DEFAULT: "#F2D400",
          container: "#F2D400",
          fixed: "#FFE33F",
          "fixed-dim": "#E2C600",
          foreground: "#171717",
        },
        "primary-container": "#F2D400",
        "primary-fixed": "#FFE33F",
        "primary-fixed-dim": "#E2C600",

        // Studio Surfaces
        surface: "#F5F2E9",
        "surface-paper": "#F5F2E9",
        "surface-dark": "#171717",
        "surface-dark-secondary": "#292929",
        "surface-white": "#FFFFFF",
        "surface-container": "#F1EEE5",
        "surface-container-low": "#F6F3EA",
        "surface-container-high": "#EBE8DF",
        "surface-container-highest": "#E5E2DA",
        "surface-bright": "#FCF9F0",
        "surface-dim": "#DDDDA1",

        // Typography colors
        "text-primary": "#171717",
        "text-on-dark": "#F5F2E9",
        "text-muted": "#66645F",
        "border-neutral": "#D8D3C7",

        background: "#F5F2E9",
        foreground: "#171717",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#171717",
        },
        muted: {
          DEFAULT: "#EBE8DF",
          foreground: "#66645F",
        },
        border: "#D8D3C7",
      },
      fontFamily: {
        headline: ['"Anton"', '"Bebas Neue"', 'sans-serif'],
        display: ['"Anton"', '"Bebas Neue"', 'sans-serif'],
        sans: ['"Outfit"', '"Manrope"', 'sans-serif'],
        body: ['"Outfit"', '"Manrope"', 'sans-serif'],
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
