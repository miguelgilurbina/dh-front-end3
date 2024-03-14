import React, { useState, useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'

//Esta pagina renderizará cada bebida de manera individual

const Character = () => {
    const [character, setCharacter] = useState([])
    const params = useParams()
    const navigate = useNavigate()

    const getCharacter = async()=>{
        //Deberas completar este fetch con el parametro correspondiente
        const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
        const data = await res.json()
        setCharacter(data)
    }

    useEffect(()=>{
        getCharacter()
    },[])
   
  
  
  return (
    <div>
        <h2>Información de Sujeto</h2>
        <div className='card'>
            <img src={character.image} alt="character-detail" />
            <p>{character.status}</p>
            <p>{character.name}</p>
            
        </div>
        <button onClick={()=>navigate(-1)}>Go back</button>
    </div>

  )
}

export default Character