import { render as testingLibraryRender } from '@testing-library/react'
import { ThemeProvider } from '@mui/material'
import { theme } from '@/components/Theme/theme'

export function render(ui: React.ReactNode) {
  return testingLibraryRender(ui, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider theme={theme({ colorMode: 'light' })}>{children}</ThemeProvider>
    ),
  })
}
