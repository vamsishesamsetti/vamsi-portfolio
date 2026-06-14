import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// If the page was prerendered at build time, hydrate the existing markup;
// otherwise mount a fresh client root.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
