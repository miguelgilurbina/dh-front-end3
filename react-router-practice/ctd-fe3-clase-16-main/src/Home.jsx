import React, { useEffect, useState } from 'react'
import Card from "./components/Card"

const Home = () => {
  const [characters, setCharacters] = useState([])

  const getCharacters = async()=>{
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = await res.json()
    console.log(data.results);
    setCharacters(data.results)
  }

  useEffect(()=>{
    getCharacters()
  },[])

  return (
    <div className='grid'>
        {characters.length 
           ? characters.map(character => (<Card data={character} key={character.id} />))
           : null
        }
    </div>
  )
}

export default Home