import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MoneyState from './context/MoneyState.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <MoneyState>
    <App />
  </MoneyState>,
)
