/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(215, 55%, 20%)',
          light: 'hsl(215, 55%, 30%)',
          foreground: 'hsl(40, 100%, 97%)',
        },
        accent: {
          DEFAULT: 'hsl(38, 80%, 55%)',
          foreground: 'hsl(215, 55%, 15%)',
        },
        background: 'hsl(210, 20%, 98%)',
        foreground: 'hsl(215, 50%, 15%)',
        muted: {
          DEFAULT: 'hsl(210, 20%, 95%)',
          foreground: 'hsl(215, 15%, 50%)',
        },
        border: 'hsl(214, 25%, 88%)',
      },
    },
  },
  plugins: [],
}

