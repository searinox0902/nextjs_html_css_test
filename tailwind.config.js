/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      'sm'  :	'640px',
      'md'  :	'768px',
      'lg'  :	'1024px',
      'xl'  :	'1280px',
      '2xl' :	'1436px',
      '3xl' : '1630px',
    },
    colors: {
      'regal-blue': '#243c5a',
      'yellow-primary' : '#F6D356',
      'white' : '#FFF',
      'black' : '#000'
    },
    maxWidth: {
      'xs' : '20rem', /* 320px */
      'sm' : '24rem', /* 384px */
      'md' : '28rem', /* 448px */
      'lg' : '32rem', /* 512px */
      'xl' : '36rem', /* 576px */
      '2xl' : '42rem', /* 672px */
      '3xl' : '48rem', /* 768px */
      '4xl' : '56rem', /* 896px */
      '5xl' : '1024px', /* 1024px */
      '6xl' : '1152px', /* 1152px */
      '7xl' : '1280px', /* 1280px */
      '8xl': '1536px',
    }
    
  },
  plugins: [],
}
