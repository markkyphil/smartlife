/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "urbanist": [
          "Urbanist", "sans-serif"
        ],
      },
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, rgba(32,28,130,1) 0%, rgba(64,29,133,1) 20%, rgba(98,31,136,1) 66%, rgba(122,32,139,1) 100%);',
      },
      lineHeight: {
        'extra-loose': '5rem',
        '16': '3rem',
      },
      colors: {
        'modal-background' : 'rgba(177, 177, 180, 0.47)',
      }
    },
  },
  plugins: [],
}

