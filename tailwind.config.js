const flowbite = require('flowbite/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        'drop-primary': '#525298',
        'drop-white': '#FFFFFF',
        'drop-lightest-grey': '#F9F9F9',
        'drop-light-grey': '#E7E0E0',
        'drop-red': '#D32424',
        'drop-blue': '#276AEC',
        'drop-gold': '#FE7B01',
        'drop-green': '#C5D86D',
        'drop-yellow': '#FFC66C',
        'drop-scrollbar': '#babac0',
        'drop-grey': '#404040',
        'drop-textshaded': '#666666',
        'highlight-no-selected': '#D0D0F9',
        'highligh-selected': '#6868F4',
      },
    },
  },
  plugins: [
    flowbite,
  ],
};
