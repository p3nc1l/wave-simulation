import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={ <App /> }  />
        <Route path="en" element={ <App lang='en' /> } />
        <Route path="hu" element={ <App lang='hu' /> } />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
