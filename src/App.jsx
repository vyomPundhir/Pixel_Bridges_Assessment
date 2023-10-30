import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <section className="app">
      <Navbar />
      {/* <Home /> */}
      <Dashboard/>
      <Footer />
    </section>
  )
}

export default App