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
      buildEnd(args) {
        if (!args.viteConfig.isProduction) {
          return
        }

        const buildPath = args.viteConfig.build.outDir
        copyFileSync(
          join(buildPath, 'index.html'),
          join(buildPath, '404.html'),
        )
      }
    }),
    tsconfigPaths()
  ],
})
