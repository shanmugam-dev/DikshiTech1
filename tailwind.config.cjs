/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'Inter', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#eef4ff',
          100: '#e0e7ff',
          500: '#4f46e5',
          600: '#4338ca',
          700: '#3730a3'
        },
        accent: {
          400: '#f97316',
          500: '#ea580c'
        }
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15,23,42,0.45)'
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top left, rgba(79,70,229,0.32), transparent), radial-gradient(circle at top right, rgba(236,72,153,0.2), transparent), radial-gradient(circle at bottom, rgba(56,189,248,0.15), transparent)'
      }
    }
  },
  plugins: []
};



