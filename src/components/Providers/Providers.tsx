import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import ModalProvider from '../Modal/ModalProvider'
import { ThemeProvider } from '../Theme'
import { Toast } from '../Toast'

export const Providers = ({ children }: any) => (
  <AppRouterCacheProvider>
    <ThemeProvider>
      <ModalProvider />
      <Toast />
      {children}
    </ThemeProvider>
  </AppRouterCacheProvider>
)
