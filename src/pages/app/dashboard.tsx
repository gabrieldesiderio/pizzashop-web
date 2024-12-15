import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'

export function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />
      <h1>Dashboard</h1>
      <Link to="/sign-in">Sign IN</Link>
    </div>
  )
}
