/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'theme1': 'var(--theme1)',
        'theme2': 'var(--theme2)',
      },
      textColor: {
        'theme1': 'var(--theme1)',
        'theme2': 'var(--theme2)',
      },
      borderColor: {
        'theme1': 'var(--theme1)',
        'theme2': 'var(--theme2)',
      },
    },
  },
  plugins: [],
}
