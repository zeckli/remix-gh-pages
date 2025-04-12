import { Outlet } from '@remix-run/react'

import Base from './components/Base'
import Menu from './components/Menu'
import rootCss from './root.css?url'

export const links = () => {
  return [{ rel: 'stylesheet', href: rootCss }]
}

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Base>
      <Menu />
      <main>{children}</main>
    </Base>
  )
}

export const HydrateFallback = () => {
  return (
    <section>
      <p className="emoji">💾</p>
      <br/>
      <p>Remix App is loading ...</p>
    </section>
  )
}

const App = () => {
  return <Outlet />
}

export default App

