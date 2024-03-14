import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav>
        <h1>Wubalubadubdub!!! </h1>
        <button  onClick={()=> navigate(-1)}>Go Back</button>
        <Link to='/home'>Home</Link>
        <Link to='/contacto'>Contacto</Link>
        
    </nav>
  )
}

export default Navbar