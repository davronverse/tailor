/** @type {import('tailwindcss').Config} */

module.exports = {
  content: {
    relative: true,
    files: [
      "./src/**/*.{js,jsx,ts,tsx}",
      './node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx,html,twig}'     
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        'AlbertSansRegular': ['"AlbertSans-Regular"', 'serif'],
        'AlbertSansMedium': ['"AlbertSans-Medium"', 'serif'],
        'AlbertSansBlack': ['"AlbertSans-Black"', 'serif'],
      },
      colors: {
        'my-base-purple-500' : '#6667AB',
        'my-base-purple-700' : '#14154E',
        'my-base-purple-600' : '#343681',
        'my-base-footer-description' : '#898AA6',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}