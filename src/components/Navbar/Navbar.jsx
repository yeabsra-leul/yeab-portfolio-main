import React from 'react'
import { NavLink,Link,useLocation } from 'react-router-dom'

export default function Navbar() {

  const location = useLocation()
  const {pathname} = location
  const splitLocation = pathname.split("/")
  return (
    <div className='nav-bar'>
            <Link className='logo' to="/"><span className='ye'>YE </span><span className='ab'>AB</span></Link>
            <nav className='nav-items'>
              <NavLink exact= "true" className = {splitLocation[1] === "home"?"active link":"link"}  to="/" activeclassname="active">
                Home
              </NavLink>
              <NavLink exact= "true" className = {splitLocation[1] === "about"?"active link":"link"} to="/about" activeclassname="active">
                About
              </NavLink>
              <NavLink exact= "true" className = {splitLocation[1] === "skills"?"active link":"link"} to="/skills" activeclassname="active">
                Skills
              </NavLink>
              <NavLink exact= "true" className = {splitLocation[1] === "projects"?"active link":"link"} to="/projects" activeclassname="active">
                Projects
              </NavLink>
              <NavLink exact= "true" className = {splitLocation[1] === "services"?"active link":"link"} to="/services" activeclassname="active">
                Services
              </NavLink>
              <NavLink exact= "true" className = {splitLocation[1] === "contact"?"active link":"link"} to="/contact" activeclassname="active">
                Contact Me
              </NavLink>
            </nav>
        </div>
  )
}
