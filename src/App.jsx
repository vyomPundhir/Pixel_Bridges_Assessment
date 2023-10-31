import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Earn from './pages/Earn'

const App = () => {
  return (
    <section className="app">
      <Navbar />
      {/* <Home /> */}
      {/* <Dashboard/> */}
      <Earn/>
      <Footer />
    </section>
  )
}

export default App