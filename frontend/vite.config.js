import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(
      {
        mode: 'jit',
        purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        content: ['./src/**/*.{js,jsx,ts,tsx}'],
        darkMode: false, // or 'media' or 'class'
        theme: {
          extend: {
            screens: {
              'sm': {'max': '550px'},
            // => @media (min-width: 640px and max-width: 767px) { ... }
      
              'md': {'min': '551px', 'max': '700px'},
              // => @media (min-width: 768px and max-width: 1023px) { ... }
      
              'lg': {'min': '1024px', 'max': '1279px'},
              // => @media (min-width: 1024px and max-width: 1279px) { ... }
      
              'xl': {'min': '1280px', 'max': '1535px'},
              // => @media (min-width: 1280px and max-width: 1535px) { ... }
      
              '2xl': {'min': '1536px'},
              // => @media (min-width: 1536px) { ... }
              }
          },
        },

      },
    )
  ],
})