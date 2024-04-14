import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import ModalProvider from '../Modal/ModalProvider'
import { ThemeProvider } from '../Theme'
import { Toast } from '../Toast'
import DateFnsProvider from './DateProvider'
import '@/utils/zod'

export const Providers = ({ children }: any) => (
  <AppRouterCacheProvider>
    <DateFnsProvider>
      <ThemeProvider>
        <ModalProvider />
        <Toast />
        {children}
      </ThemeProvider>
    </DateFnsProvider>
  </AppRouterCacheProvider>
)
