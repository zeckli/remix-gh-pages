import { Links, Scripts } from '@remix-run/react'

export const Base = ({ children }: { children: React.ReactNode }) => {
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
      <body className="deco">
        {children}
        <Scripts />
      </body>
    </html>
  )
}

export default Base
