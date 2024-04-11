'use client'

import { createTheme } from '@mui/material/styles'
import { Lexend } from 'next/font/google'

type ThemeOptions = {
  colorMode: 'dark' | 'light'
}

const lexend = Lexend({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})
export const theme = (props: ThemeOptions) =>
  createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          fontFamily: lexend.style.fontFamily,
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
          style: {
            textTransform: 'none',
          },
        },
      },
    },
    palette: {
      mode: props.colorMode,
      primary: {
        500: '#0942ff',
        900: '#0000cc',
        800: '#001ddb',
        700: '#002ce6',
        600: '#0239f3',
        400: '#4a62ff',
        300: '#7281ff',
        200: '#9fa5ff',
        100: '#c7c8ff',
        50: '#e9e9ff',
        main: '#0942ff',
        dark: '#0239F3',
        light: '#4A62FF',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#00CC74',
        50: '#e6fff5',
        100: '#d0ffeb',
        200: '#9ffed5',
        300: '#6bfebd',
        400: '#46feaa',
        500: '#32fe9e',
        600: '#26fe97',
        700: '#18e382',
        800: '#00c973',
        900: '#00ae60',
        dark: '#00B24F',
        light: '#57D68D',
        contrastText: '#FFFFFF',
      },
      error: {
        main: '#D32F2F',
        50: '#ffebeb',
        100: '#fbd7d7',
        200: '#efacad',
        300: '#e47f7f',
        400: '#db5a5a',
        500: '#d64141',
        600: '#d43434',
        700: '#bc2727',
        800: '#a81f21',
        900: '#94141a',
        dark: '#C62828',
        light: '#EF5350',
        contrastText: '#FFFFFF',
      },
      warning: {
        main: '#EF6C00',
        50: '#fff3e3',
        100: '#ffe5cd',
        200: '#ffc89c',
        300: '#feaa65',
        400: '#fe9239',
        500: '#fe811c',
        600: '#fe780d',
        700: '#e36700',
        800: '#ca5a00',
        900: '#b04c00',
        dark: '#E65100',
        light: '#FF9800',
        contrastText: '#FFFFFF',
      },
      info: {
        main: '#0288D1',
        50: '#e5f9ff',
        100: '#d0eeff',
        200: '#a0dcfc',
        300: '#6ec7fa',
        400: '#49b6f8',
        500: '#35acf8',
        600: '#29a8f9',
        700: '#1a92de',
        800: '#0282c8',
        900: '#0070b1',
        dark: '#01579B',
        light: '#03A9F4',
        contrastText: '#FFFFFF',
      },
      success: {
        main: '#2E7D32',
        50: '#f0faf1',
        100: '#e0f1e0',
        200: '#bce2be',
        300: '#95d398',
        400: '#75c777',
        500: '#61bf63',
        600: '#55bc58',
        700: '#46a548',
        800: '#3c923f',
        900: '#2f7f33',
        dark: '#1B5E20',
        light: '#4CAF50',
      },
    },
  })

export type Theme = typeof theme
