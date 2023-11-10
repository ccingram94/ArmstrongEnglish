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
        'hero': "url('https://d20etpig7obrzj.cloudfront.net/hero.jpg')",
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}
