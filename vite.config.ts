import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const repo = '/remix-gh-pages/'

export default defineConfig({
  base: repo,
  plugins: [
    remix({
      basename: repo,
      ssr: false,
    }),
    tsconfigPaths()
  ],
})
