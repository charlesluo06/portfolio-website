import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <link rel="icon" type="image/svg+xml" href="/circleMe.png" />
    <App />
  </StrictMode>,
)
