import React from 'react'
import { useState } from 'react'

const Formpokemon = () => {

    const [user, setUser] = useState({
        name: '',
        edad: '',
        pokemon: ''
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        const numRegex = /[0-9]/

        if(name.length>3 && numRegex.text(edad) && edad.length>=0){
          setShow(true)
          setErr(false)  
        } else {

            setErr(true)

        }
    }
  return (
    <div>
        {show ? null : 
            <form onSubmit={handleSubmit}>
                    <label>Nombre:</label>
                    <input type="text" onChange={(event) => setUser({...user, name: event.target.value})} />
                    <label>Edad:</label>
                    <input type= "text" onChange={(event) => setUser({...user,edad: event.target.value})}/>
                    <label>Pokemon Favorito:</label>
                    <input type= "text" onChange={(event) => setUser({...pokemon,address: event.target.value})}/>
                    <button style={btnStyle} >Enviar</button>
            </form>
     }

    {show ? 
        <>
         <h3>Genial {user.name} ! Tenés {user.edad} y tu pokemon Favorito es {user.pokemon}</h3>
         <h3>En 30 minutos te llega el pedido a {user}</h3>
        </> 
        : 'Colocá tu nombre, edad y tu Pokemon Favorito'}
        
    {err && <h4>'Debe colocar los datos correctamente' </h4>}
      
    </div>
  )
}



export default Formpokemon
