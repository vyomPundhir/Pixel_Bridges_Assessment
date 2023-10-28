import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <section className="app">
      <Navbar />
      <Home />
    </section>
  )
}

export default App