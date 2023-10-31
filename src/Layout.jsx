import React from 'react'
import { Outlet } from 'react-router-dom' //Isme react-router-dom is wajah se nesting ki jaa sakti hai by using Outlet
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout