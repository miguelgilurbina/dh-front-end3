import React, { useState , useEffect} from 'react'
import Pizza from './Pizza.jsx'

export const Pedido = () => {
    const [pizza, setPizza] = useState(false)
   

  
    useEffect(()=> {

      setTimeout(()=> {
        console.log('Comienzo del timer de 2 segundos');
        setPizza(true)
        
      }, 2000)
  
  
    },[]);

    const Button = () => {
      setPizza(false)
      alert('Su pedido ha sido cancelado')
    }



  return (
    <div>
        <h1>Su Pedido</h1>
        <h3>{pizza && <Pizza/>}</h3>
        <button 
         onClick= {Button}>Cancelar pedido</button>    
    </div>
  )
}

export default Pedido
