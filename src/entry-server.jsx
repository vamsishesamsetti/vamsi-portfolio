import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Rendered at build time by scripts/prerender.js to bake the full HTML
// (headings, text, links) into dist/index.html for SEO and crawlers.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
