/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: '1rem',
    },
    borderRadius: {
      sm: '12px',
      DEFAULT: '16px',
      lg: '18px',
      full: '9999px'
    },
    extend: {
      colors: {
        gray: {
          400: '#C4C4C4',
          500: '#9EA0A4'
        },
        neutral: {
          50: '#F6F7F8',
          100: '#E7EBF1',
          200: '#E1E5EC'
        },
        slate: {
          50: '#eff2f7',
          900: '#354153'
        },
        yellow: '#eac505',
        orange: '#ef7d54',
        emerald: {
          light: '#D4E0E0',
          DEFAULT: '#95B6A9',
        },
        primary: {
          light: '#42A976',
          DEFAULT: '#3a7859',
          dark: '#2d6a4c'
        }
      }
    }
  },
  plugins: []
};
