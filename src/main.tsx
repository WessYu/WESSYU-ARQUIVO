import React from 'react'
import ReactDOM from 'react-dom/client'
import ReferencePortfolio from './ReferencePortfolio'
import './styles.css'
import './reference-portfolio.css'
import { ErrorBoundary } from './components/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ReferencePortfolio />
    </ErrorBoundary>
  </React.StrictMode>
)
