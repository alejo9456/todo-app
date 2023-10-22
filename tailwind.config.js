/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
        // 'very-dark-grayish-blue-hover': 'hsl(237, 14%, 26%)',

        //check color
        'primary-check': 'hsl(192, 100%, 67%)',
        'secondary-check': 'hsl(280, 87%, 65%)'
      },
      fontWeight:{
        'ligth': '400',
        'bold': '700'
      },
      backgroundImage: {
        'desktop-light': "url('/bg-desktop-light.jpg')",
        'mobile-light': "url('/bg-mobile-light.jpg')",
        'desktop-dark': "url('/bg-desktop-dark.jpg')",
        'mobile-dark': "url('/bg-mobile-dark.jpg')"
      }
    },
  },
  plugins: [],
}

