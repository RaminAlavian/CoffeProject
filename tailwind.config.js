/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  darkMode: 'selector',
  theme: {
   
    extend: {
      
      fontFamily: {
       'Dana' : 'Dana Regular',
        'DanaMedium':'Dana Medium',
        'DanaBold':'Dana Bold',
        'MorabbaLight':'Morabba Light',
        'MorabbaMedium':'Morabba Medium',
        "MorabaBold" : 'Morabba Bold'
      }
      ,
      colors: {
        brown : {
          900 : '#634832',
          600: '#967259',
          300: '#DBC1AC',
          100: '#ECE0D1'
        },
      },
      boxShadow: {
        'normal' : '0px 1px 10px 0px rgba(0, 0, 0, 0.05);'
      }
      ,
      borderRadius: {
        '4xl' : '2rem'
      },
      letterSpacing:{
        tightest: '-0.6.5em',
      }
    },
  },
  plugins: [

    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}

