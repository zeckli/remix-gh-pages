import { Link } from '@remix-run/react'

const Menu = () => {
  const randomPath = Math.random().toString(36).substring(2, 6)
  return (
    <section className="menu">
      <Link to="/">Index</Link>
      <Link to="/about">About</Link>
      <Link to={`/${randomPath}`}>404</Link>
    </section>
  )
}

export default Menu
