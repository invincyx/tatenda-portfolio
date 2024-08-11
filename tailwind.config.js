/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        extrabold: '800',
      },
    },
    daisyui: {
      themes: [
        {
          mytheme: {
                "primary": "#042819",
                "secondary": "#ffd700",
                "accent": "#ffd700",
                "accent-200": "#fae987",
                "neutral": "#fae987",        
                "base-100": "#ffffff",
                "info": "#0000ff",
                "success": "#00ff00",
                "warning": "#00ff00",
                "error": "#ff0000",
            },
          },
        ],
      },
  },
  plugins: [
    daisyui,
  ],
};
