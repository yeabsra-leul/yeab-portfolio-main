import React from 'react'
import "./index.scss"
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

export default function Layout() {
  return (
    <div className='container'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
