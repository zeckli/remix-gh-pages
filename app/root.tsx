import { Links, Outlet, Scripts } from '@remix-run/react'

import rootCss from './root.css?url'

export const links = () => {
  return [{ rel: 'stylesheet', href: rootCss }]
}

const App = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
      </head>
      <body className="grid center">
        <Outlet />
        <Scripts />
      </body>
    </html>   
  )
}
export default App

