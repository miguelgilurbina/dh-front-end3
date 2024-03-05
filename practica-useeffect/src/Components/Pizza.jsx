import React, { useEffect } from 'react'



export const Pizza = () => {
  


  useEffect(()=>{


    return () => console.log('Componente desmontado');

  },[])
 
  return (
    <div>
      <h3>Pizza Margarita</h3>

    </div>
  )
}



export default Pizza
