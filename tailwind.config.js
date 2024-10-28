/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          light: '#60a5fa',  // Used as bg-brand-light
          DEFAULT: '#2563eb',  // Used as bg-brand
          dark: '#1d4ed8',  // Used as bg-brand-dark
        },
        'accent': '#f59e0b',  // Used as bg-accent
      },
      fontFamily: {
        'display': ['Poppins', 'system-ui', 'sans-serif'],  // Used as font-display
        'body': ['Inter', 'arial', 'sans-serif'],  // Used as font-body
      },
      spacing: {
        'navbar': '4.5rem',  // Used as h-navbar
        'hero': '32rem',  // Used as h-hero
        '128': '32rem',  // Used as p-128
      },
      borderRadius: {
        'custom': '1.5rem',  // Used as rounded-custom
      },
      fontSize: {
        'title': ['4rem', { lineHeight: '1.1' }],  // Used as text-title
      }
    },
  },
  plugins: [],
}

