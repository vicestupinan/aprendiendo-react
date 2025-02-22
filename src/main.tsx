import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import PrimeraClase from './Clase 1/PrimerClase'
import SegundaClase from './Clase 2/SegundaClase'

const notes = [
  {
      id: 1,
      content: 'HTML is easy',
      important: true,
      categories: ['HTML', 'CSS', 'JavaScript']
  },
  {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false
  },
  {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      important: true
  }
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <PrimeraClase /> */}
    <SegundaClase notesProps={notes} />
  </StrictMode>,
)
