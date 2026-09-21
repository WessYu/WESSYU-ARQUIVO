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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)

const startEnhancements = () => {
  void import('./projectReel').then(({ initProjectReel }) => initProjectReel())
}

if ('requestIdleCallback' in window) {
  window.requestIdleCallback(startEnhancements, { timeout: 900 })
} else {
  window.setTimeout(startEnhancements, 120)
}
