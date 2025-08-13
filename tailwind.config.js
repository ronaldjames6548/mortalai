/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-pink-purple': 'linear-gradient(to right, #db2777, #9333ea)',
        'gradient-blue': 'linear-gradient(to right, #2563eb, #60a5fa)',
        'gradient-pink': 'linear-gradient(to right, #ec4899, #f472b6)',
        'gradient-green': 'linear-gradient(to right, #16a34a, #4ade80)',
        'gradient-blue-purple': 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))',
      },
      fontFamily: {
        figtree: ['var(--font-figtree)'],
      },
      colors: {
        cyan: {
          800: 'rgba(21, 94, 117, 0.8)',
        },
        mahjong: {
          green: '#2e7d32',
          red: '#b71c1c',
          white: '#f5f5f5',
        },
      },
      spacing: {
        14: '3.5rem',
      },
    },
  },
  plugins: [],
};