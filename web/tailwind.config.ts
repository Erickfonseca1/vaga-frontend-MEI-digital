import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cores da identidade visual
        primary: {
          DEFAULT: '#007bff', // azure - cor primária
          50: '#e6f3ff',
          100: '#cce7ff',
          200: '#99cfff',
          300: '#66b7ff',
          400: '#339fff',
          500: '#007bff', // azure
          600: '#0062cc',
          700: '#004a99',
          800: '#003166',
          900: '#001933',
        },
        success: {
          DEFAULT: '#28a745', // pigment-green - ações e sucesso
          50: '#e8f5e9',
          100: '#d1ebd3',
          200: '#a3d7a7',
          300: '#75c37b',
          400: '#47af4f',
          500: '#28a745', // pigment-green
          600: '#208637',
          700: '#186529',
          800: '#10441b',
          900: '#08220d',
        },
        neutral: {
          DEFAULT: '#f8f9fa', // seasalt - cor neutra
          50: '#fefefe',
          100: '#fdfefe',
          200: '#fbfcfd',
          300: '#f9fafb',
          400: '#f7f9fa',
          500: '#f8f9fa', // seasalt
          600: '#c6c7c8',
          700: '#949596',
          800: '#626364',
          900: '#313132',
        },
        warning: {
          DEFAULT: '#ffc107', // amber - alertas
          50: '#fff8e6',
          100: '#fff1cc',
          200: '#ffe399',
          300: '#ffd566',
          400: '#ffc733',
          500: '#ffc107', // amber
          600: '#cc9a06',
          700: '#997404',
          800: '#664d03',
          900: '#332701',
        },
        danger: {
          DEFAULT: '#db3a34', // poppy - erros e ações de deletar
          50: '#fdeaea',
          100: '#fbd5d5',
          200: '#f7abab',
          300: '#f38181',
          400: '#ef5757',
          500: '#db3a34', // poppy
          600: '#af2e2a',
          700: '#83221f',
          800: '#571715',
          900: '#2b0b0a',
        },
        // Aliases para facilitar o uso
        azure: '#007bff',
        'pigment-green': '#28a745',
        seasalt: '#f8f9fa',
        amber: '#ffc107',
        poppy: '#db3a34',
      },
      // Gradientes personalizados
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(90deg, #007bff, #28a745, #f8f9fa, #ffc107, #db3a34)',
        'gradient-primary': 'linear-gradient(90deg, #007bff, #28a745)',
        'gradient-warning': 'linear-gradient(90deg, #ffc107, #db3a34)',
      },
    },
  },
  plugins: [],
}

export default config 