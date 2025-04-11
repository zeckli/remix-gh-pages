import { vitePlugin as remix } from '@remix-run/dev'
import { copyFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const repo = '/remix-gh-pages/'

export default defineConfig({
  base: repo,
  plugins: [
    remix({
      basename: repo,
      ssr: false,
      buildEnd({ viteConfig }) {
        if (!viteConfig.isProduction) {
          return
        }

        const path = viteConfig.build.outDir
        copyFileSync(
          join(path, 'index.html'),
          join(path, '404.html'),
        )
      }
    }),
    tsconfigPaths()
  ],
})
