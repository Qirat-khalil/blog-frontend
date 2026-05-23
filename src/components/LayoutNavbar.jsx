import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const LayoutNavbar = () => {
  return (
 <>
 <Navbar/>
 <Outlet/>
 </>
  )
}

export default LayoutNavbar