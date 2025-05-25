/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e0f2fe', // background
          300: '#7dd3fc', // light elements
          500: '#0ea5e9', // primary color
          700: '#0369a1', // hover/active states
          900: '#0c4a6e', // text
        },
        quizzPrimary: {
          100: '#fde8e8', // background - very light red
          300: '#f87171', // light elements - darker light red
          500: '#b42222', // primary color - your specified red
          700: '#991b1b', // hover/active states - darker red
          900: '#7f1d1d', // text - darkest red
        },
        quizzSecondary: {
          100: '#f1f5f9', // background
          300: '#cbd5e1', // light elements
          500: '#64748b', // primary color
          700: '#334155', // hover/active states
          900: '#0f172a', // text
        },
        classPrimary: {
          100: '#fff3d6', // background - very light amber
          300: '#ffd166', // light elements - light amber
          500: '#ffb300', // primary color - your specified amber
          700: '#cc8f00', // hover/active states - darker amber
          900: '#996b00', // text - darkest amber
        },
        classSecondary: {
          100: '#f8fafc', // background - lightest blue-gray
          300: '#94a3b8', // light elements - light blue-gray
          500: '#475569', // primary color - blue-gray
          700: '#334155', // hover/active states - darker blue-gray
          900: '#0f172a', // text - darkest blue-gray
        },
      },
    },
  },
  plugins: [],
}

