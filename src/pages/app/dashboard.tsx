import { Link } from 'react-router'

export function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/sign-in">Sign IN</Link>
    </div>
  )
}
