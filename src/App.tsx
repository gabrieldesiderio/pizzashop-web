import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import { AppRoutes } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <AppRoutes />
    </HelmetProvider>
  )
}
