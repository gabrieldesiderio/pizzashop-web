import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'

export function SignIn() {
  return (
    <div>
      <Helmet title="Login" />

      <h1>Sign IN</h1>
      <Link to="/">Dashboard</Link>
    </div>
  )
}
