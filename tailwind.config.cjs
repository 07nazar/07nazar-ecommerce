module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /bg-([^\s-]+)/
    },
    {
      pattern: /text/
    }
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
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
    extend: {
      padding: {
        '1.75': '0.4rem',
      },
      width: {
        '42': '10.5rem',
      },
      fontSize: {
        xs: '0.813rem'
      },
      lineHeight: {
        '6.5': '1.625rem'
      }
    }
  },
  plugins: [],
}
