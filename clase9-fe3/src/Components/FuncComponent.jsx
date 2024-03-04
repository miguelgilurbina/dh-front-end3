import React, { useEffect, useState } from 'react'

const FuncComponent = () => {
    console.log('Se ejecuta la parte Lógica');
    const [name, setName] = useState('Marcelo')
    const [count,setCount] = useState(0)
    const [cart,setCart] = useState([
        'Remera','Pantalon','Zapatos'
    ])

    //Montaje
    useEffect(()=> {
        console.log('Esto se ejecuta una sola vez');
    },[])

    //Actualización

    useEffect(() => {
        // console.log('Se montó el componente');
        console.log('Se actualizó el estado name');
    }, [name, count])

    //Montaje
    useEffect(()=> {
        return () => {
            console.log('Se desmontó el componente de función');
        }
    })
  return (
    <div>
      {console.log('Ejecutando el render del componente de función')}
      <h3>{name}</h3>
      <button onClick={()=> setName('Paola')}>Ese no es  mi nombre</button>
      <br />
      <button onClick={()=> setCount(count-1)}>-</button>
      <h4>{count}</h4>
      <button onClick={()=> setCount(count+1)}>+</button>
    </div>
  )
}

export default FuncComponent

