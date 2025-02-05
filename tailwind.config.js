module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1E1E1E',
        gray: {
          900: '#212121',
          800: '#333333',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
