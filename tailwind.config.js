/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // --- PASTIKAN STRUKTUR INI BENAR ---
        'tocimi-cream': '#F7F2E8',
        'tocimi-pink': '#E8C9CD',
        'tocimi-purple': '#8879B0',
        'tocimi-brown': '#4A3533',
        // ----------------------------------
      },
      fontFamily: {
        serif: ['Georgia', 'serif'], 
      },
      backgroundImage: {
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
module.exports = config