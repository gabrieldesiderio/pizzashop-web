import { Route, Routes } from 'react-router'

import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="sign-in" element={<SignIn />} />
    </Routes>
  )
}
