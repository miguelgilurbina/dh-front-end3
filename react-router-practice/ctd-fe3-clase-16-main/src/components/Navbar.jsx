import React from 'react'
import Home from '../Home'
import Contacto from '../Contacto'
import Beer from '../Beer'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to='/home'>Home</Link>
        <Link to='/contacto'>Contacto</Link>
        <Link to='/beer'>Beer</Link>
    </nav>
  )
}

export default Navbar