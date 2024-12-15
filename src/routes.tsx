import { Route, Routes } from 'react-router'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="sign-in" element={<SignIn />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}