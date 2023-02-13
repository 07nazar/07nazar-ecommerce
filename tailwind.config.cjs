module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      red: '#FA3434',
      orange: "#FF9017",
      biscuit: "#FFE5BF",
      green: '#00B517',
      lightgreen: "#C3FFCB",
      blue: '#0D6EFD',
      lightblue: "#E3F0FF",
      black: "#1C1C1C",
      gray: {
        dark: "#505050",
        hot: "#8B96A5",
        deep: "#BDC4CD",
        medium: "#DEE2E7",
        pale: "#EFF2F4",
        light: "#F7FAFC",
      },
    },
    screens: {
      'lg': { 'max': '992px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '480px' }
    },
    container: {
      padding: '20px',
      center: true
    },
  },
  plugins: [],
}