import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Details} from './pages/details.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Details />
  </StrictMode>,
)
