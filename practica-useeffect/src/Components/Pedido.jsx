import React, { useEffect,useState } from 'react'



const Pedido = () => {

    
    useEffect(()=> {


    },[])


  return (
    <div>
        <h1>Su Pedido</h1>
        <h3>{show}</h3>
        <Pizza/>
        <button 
        >Cancelar pedido</button>    
    </div>
  )
}

export default Pedido
