import { Links, Outlet, Scripts } from '@remix-run/react'

import rootCss from './root.css?url'

export const links = () => {
  return [{ rel: 'stylesheet', href: rootCss }]
}

export const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
      </head>
      <body className="grid center">
        {children}
        <Scripts />
      </body>
    </html>
  )
}

export const HydrateFallback = () => {
  return (
    <section className="pb-10">
      <p className="emogi">💾</p>
      <br/>
      <p>Remix App is loading ...</p>
    </section>
  )
}

const App = () => {
  return <Outlet />
}

export default App

