/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //primary
        'bright-blue': 'hsl(220, 98%, 61%)',
        //ligthTheme
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'light-grayish-blue': 'hsl(233, 11%, 84%)',
        'dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue': 'hsl(235, 19%, 35%)',
        // darkTheme
        'very-dark-blue': 'hsl(235, 21%, 11%)',
        'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
        'light-grayish-blue': 'hsl(234, 39%, 85%)',
        'light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
        'dark-grayish-blue': 'hsl(234, 11%, 52%)',
        'very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
        'very-dark-grayish-blue-hover': 'hsl(237, 14%, 26%)'
      },
      height: {
        '40vh': '40vh',
        '60vh': '60vh',
      },
      fontWeight:{
        'ligth': '400',
        'bold': '700'
      }
    },
  },
  plugins: [],
}

