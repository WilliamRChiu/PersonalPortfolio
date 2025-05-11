import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LightingProvider } from './context/LightingContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LightingProvider>
      <App />
    </LightingProvider>
  </StrictMode>,
)
