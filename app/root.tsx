import { Links, Outlet, Scripts } from '@remix-run/react'

import rootCss from './root.css?url'

export const links = () => {
  return [{ rel: 'stylesheet', href: rootCss }]
}

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-11Z2GSPJBK"></script>
        <script async dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-11Z2GSPJBK');
          `,
        }}/>
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

