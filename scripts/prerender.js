import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { readFileSync, writeFileSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')
const serverEntry = resolve(__dirname, '../dist-server/entry-server.js')

const { render } = await import(serverEntry)
const appHtml = render()

const indexPath = resolve(distDir, 'index.html')
const template = readFileSync(indexPath, 'utf-8')

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Prerender: could not find <div id="root"></div> in dist/index.html')
}

const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`,
)
writeFileSync(indexPath, html)
console.log('Prerendered dist/index.html (' + appHtml.length + ' chars injected)')
