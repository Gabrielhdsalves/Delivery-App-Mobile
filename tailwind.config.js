// tailwind.config.js

module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {
            colors:
            {
                primary: '#FF6363',
                dark: {
                    background: '#00FFFF',
                    200: '#FF0000',
                    300: '#0000FF',
                }
            },
        },
      },
      plugins: [],
    }