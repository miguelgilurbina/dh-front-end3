import React, { useEffect, useState } from 'react'

const Dog = () => {
    const [dog,setDog] = useState({})
    const url = 'https://dog.ceo/api/breeds/image/random'

    useEffect(()=> {
        fetch(url)
    .then(res => res.json())
    .then(data => setDog(data)) 
    }, [])
    


  return (
    <div>
        {dog ? <img src={dog.message} alt= ""/> : 'Cargando...'  }
         
    </div>
  )
}

export default Dog
