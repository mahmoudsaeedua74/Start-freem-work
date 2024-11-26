import React from 'react'
import Navbar from '../NavBar/Navbar'
import { Outlet } from 'react-router-dom'
import Foooter from '../Footer/Foooter'

export default function Layout() {
  return (
   <>
    <Navbar/>
 
  <Outlet />
   <Foooter />
</>
  )
}
