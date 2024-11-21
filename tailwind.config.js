/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
       extend: {
      backgroundImage:{
        'hero'   : "url('./assets/hero.svg')",
        'heroMob': "url('./assets/mhero.svg')",
      },
      colors:{
        //Primary
        Pink            : "hsl(322, 100%, 66%)",
        //Neutral
        VPaleCyan         : "hsl(193, 100%, 96%)",
        VDarkCyan          : "hsl(192, 100%, 9%)",
        GrayishBlue     : "hsl(208, 11%, 55%)",
      },

      fontFamily:{
        Poppins  :['Open Sans', 'sans-serif'],
        openSans:['Poppins', 'sans-serif']
      },

      fontSize:{
        base:"18px"
      },

      fontWeight:{
        normal  : "300",
        medium  : "400",
        semibold: "500",
        bold    : "600",
        xbold   : "700",
      },

      screens:{
        'xs' : '375px',
        'sm' : '640px',
        'md' : '768px',
        'lg' : '1024px',
        'xl' : '1280px',
        '2xl': '1536px',
      }

    },
  },
  plugins: [],
}

