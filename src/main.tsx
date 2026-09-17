import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import './refinements.css'
import './tech-stack.css'
import './project-reel.css'
import './project-reel-details.css'
import './component-vault-spotlight.css'
import './portfolio-polish.css'
import './performance.css'
import './senior-pass.css'
import './engineering-system.css'
import { ErrorBoundary } from './components/ErrorBoundary'
import { TechStack } from './components/TechStack'
import { mountComponentVaultSpotlight } from './componentVaultSpotlight'
import { initProjectReel } from './projectReel'
import { applyContentEnhancements } from './contentEnhancements'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
      <TechStack />
    </ErrorBoundary>
  </React.StrictMode>
)

function patchProfileLinks() {
  document
    .querySelectorAll<HTMLAnchorElement>('a[href*="linkedin.com/in/wesley-santos-cruz-b57589213"]')
    .forEach((link) => {
      link.href = 'https://www.linkedin.com/in/wesley-cruz2001/'
    })
}

const startEnhancements = () => {
  mountComponentVaultSpotlight()
  initProjectReel()
  applyContentEnhancements()
  patchProfileLinks()
}

if ('requestIdleCallback' in window) {
  window.requestIdleCallback(startEnhancements, { timeout: 900 })
} else {
  window.setTimeout(startEnhancements, 120)
}
