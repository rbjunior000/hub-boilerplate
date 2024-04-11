import { ThemeProvider as MuiThemeProvider, ThemeOptions } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { createContext, useEffect, useMemo, useState } from 'react'
import { useMediaQuery } from '@mui/material'
import { useLocalStorage } from '@mantine/hooks'
import { theme as HubTheme } from './theme'
import { useWatch } from '@/hooks'

type ColorMode = 'light' | 'dark'

export type ThemeContextProps = {
  toggleMode: () => void
  theme: ThemeOptions
  handleChangeColor: (value: boolean) => void
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useLocalStorage<ColorMode>({
    key: 'color-mode',
    defaultValue: prefersDarkMode ? 'dark' : 'light',
  })
  const [isClient, setisClient] = useState(false)

  useWatch(() => {
    setMode(prefersDarkMode ? 'dark' : 'light')
  }, [prefersDarkMode])
  const theme = useMemo(() => HubTheme({ colorMode: mode }), [mode])

  useEffect(() => {
    setisClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const handleChangeColor = (value: boolean) => {
    const color = value ? 'dark' : 'light'
    setMode(color)
  }

  return (
    <ThemeContext.Provider value={{ toggleMode, theme, handleChangeColor }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
