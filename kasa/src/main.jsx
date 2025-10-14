import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "./styles/main.scss"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* Ci-dessus lien avec la page HTML réalisé sur cette page Main. Redirection vers la page où le code en jsx est agrégé. */
