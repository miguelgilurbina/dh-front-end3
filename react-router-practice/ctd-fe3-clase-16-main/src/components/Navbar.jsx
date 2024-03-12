import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <nav>
        <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
        <button  onClick={()=> navigate(-1)}>Go Back</button>
        <Link to='/home'>Home</Link>
        <Link to='/contacto'>Contacto</Link>
        
    </nav>
  )
}

export default Navbar