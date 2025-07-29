/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Cores da identidade visual
        primary: {
          DEFAULT: '#007bff', // azure
          50: '#e6f3ff',
          100: '#cce7ff',
          200: '#99cfff',
          300: '#66b7ff',
          400: '#339fff',
          500: '#007bff',
          600: '#0062cc',
          700: '#004999',
          800: '#003166',
          900: '#001833',
        },
        success: {
          DEFAULT: '#28a745', // pigment-green
          50: '#e8f5e9',
          100: '#d1ebd3',
          200: '#a3d7a7',
          300: '#75c37b',
          400: '#47af4f',
          500: '#28a745',
          600: '#208637',
          700: '#186529',
          800: '#10431b',
          900: '#08220d',
        },
        neutral: {
          DEFAULT: '#f8f9fa', // seasalt
          50: '#fefefe',
          100: '#fdfefe',
          200: '#fbfcfd',
          300: '#f9fafb',
          400: '#f8f9fa',
          500: '#e9ecef',
          600: '#dee2e6',
          700: '#ced4da',
          800: '#adb5bd',
          900: '#6c757d',
        },
        warning: {
          DEFAULT: '#ffc107', // amber
          50: '#fff8e6',
          100: '#fff1cc',
          200: '#ffe399',
          300: '#ffd566',
          400: '#ffc733',
          500: '#ffc107',
          600: '#cc9a06',
          700: '#997404',
          800: '#664d03',
          900: '#332701',
        },
        danger: {
          DEFAULT: '#db3a34', // poppy
          50: '#fdeaea',
          100: '#fbd5d5',
          200: '#f7abab',
          300: '#f38181',
          400: '#ef5757',
          500: '#db3a34',
          600: '#af2e2a',
          700: '#83221f',
          800: '#571715',
          900: '#2b0b0a',
        },
        // Cores com nomes originais
        azure: '#007bff',
        'pigment-green': '#28a745',
        seasalt: '#f8f9fa',
        amber: '#ffc107',
        poppy: '#db3a34',
        // Cores de fundo e texto
        background: '#ffffff',
        surface: '#ffffff',
        text: {
          primary: '#171717',
          secondary: '#6b7280',
          disabled: '#9ca3af',
        },
        // Cores de borda
        border: {
          light: '#e5e7eb',
          medium: '#d1d5db',
          dark: '#9ca3af',
        },
        // Cores de estado
        state: {
          hover: '#f3f4f6',
          pressed: '#e5e7eb',
          disabled: '#f9fafb',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 