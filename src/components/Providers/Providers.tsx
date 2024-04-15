import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import ModalProvider from '../Modal/ModalProvider'
import { ThemeProvider } from '../Theme'
import { Toast } from '../Toast'
import { DateProvider } from './DateProvider'
import '@/utils/zod'

export const Providers = ({ children }: any) => (
  <AppRouterCacheProvider>
    <DateProvider>
      <ThemeProvider>
        <ModalProvider />
        <Toast />
        {children}
      </ThemeProvider>
    </DateProvider>
  </AppRouterCacheProvider>
)
