import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { AppRoutes } from './routes'

export function App() {
  return (
    <ThemeProvider storageKey="pizzashop-theme">
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <AppRoutes />
      </HelmetProvider>
    </ThemeProvider>
  )
}
