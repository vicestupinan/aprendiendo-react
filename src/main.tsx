import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PrimeraClase from './Clase 1/PrimerClase'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeraClase />
  </StrictMode>,
)
