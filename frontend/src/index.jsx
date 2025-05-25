import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Session from './Pages/Session'
import React from 'react'
import Header from './Components/Header'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Session id=""/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
