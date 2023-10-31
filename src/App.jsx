import React from 'react'
// import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Navbar from './components/Navbar'
import Home from './pages/Home'
// import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Earn from './pages/Earn'
import Layout from './Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='earn' element={<Earn />} />
    </Route>
  )
)

const App = () => {
  return (
    <section className="app">
      <RouterProvider router={router} />
    </section>
  )
}

export default App