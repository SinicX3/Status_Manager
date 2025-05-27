import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import React from 'react'
import Header from './Components/Header'

const domNode = document.getElementById('root') as HTMLElement
const root = createRoot(domNode)

if (!domNode) {
  throw new Error("No element with id 'root' found in the DOM")
}

root.render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </StrictMode>,
)
