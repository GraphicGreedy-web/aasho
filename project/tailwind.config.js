/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b6b',
        secondary: '#ffa06b',
        accent: '#ffd56b',
        background: '#f8f9fa',
        textColor: '#343a40',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1545562083-c583d014b4f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        'testimonial-pattern': "url('https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      },
    },
  },
  plugins: [],
};