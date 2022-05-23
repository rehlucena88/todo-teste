import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home } from './pages/home' // usado o named import export nao usado o import default

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
