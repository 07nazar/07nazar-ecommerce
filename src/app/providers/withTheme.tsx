import { createTheme } from '@mui/material'
import { ThemeOptions } from '@mui/material/styles'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { ReactNode } from 'react'

declare module '@mui/material/styles' {
  interface AppPaletteColorOptions {
    black?: string
    orange?: string
    biscuit?: string
    lightgreen?: string
    lightblue?: string
  }

  interface AppPaletteColor {
    black: string
    orange: string
    biscuit: string
    lightgreen: string
    lightblue: string
  }

  interface GrayPaletteColorOptions {
    dark?: string
    deep?: string
    hot?: string
    medium?: string
    pale?: string
    light?: string
  }

  interface GrayPaletteColor {
    dark: string
    deep: string
    hot: string
    medium: string
    pale: string
    light: string
  }

  interface PaletteOptions {
    app?: AppPaletteColorOptions
    gray?: GrayPaletteColorOptions
  }

  interface Palette {
    app: AppPaletteColor
    gray: GrayPaletteColor
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    app: {
      black: '#1C1C1C',
      orange: '#FF9017',
      biscuit: '#FFE5BF',
      lightgreen: '#C3FFCB',
      lightblue: '#E3F0FF',
    },
    gray: {
      dark: '#505050',
      deep: '#8B96A5',
      hot: '#BDC4CD',
      medium: '#DEE2E7',
      pale: '#EFF2F4',
      light: '#F7FAFC',
    },
    primary: {
      main: '#0D6EFD',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#F7FAFC',
    },
    text: {
      primary: '#505050',
      secondary: '#8B96A5',
    },
    error: {
      main: '#FA3434',
      light: '#FFE0E0',
      dark: '#FA3434',
    },
    warning: {
      main: '#FF9017',
      light: '#FFF3E7',
      dark: '#FF9017',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#00B517',
      light: '#E5F7E7',
      dark: '#00B517',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Inter',
    fontSize: 16,
    h1: {
      fontSize: '3rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.18,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.33,
    },
    h4: {
      fontSize: '1.2rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: '1.1rem',
      lineHeight: 1.2,
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.21,
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 6,
  },
}

const theme = createTheme(themeOptions)

export const withTheme = (component: () => ReactNode) =>
  function App() {
    return <ThemeProvider theme={theme}>{component()}</ThemeProvider>
  }
