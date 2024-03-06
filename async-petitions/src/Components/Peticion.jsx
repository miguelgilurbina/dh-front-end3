import React, {useState, useEffect} from 'react'

const Peticion = () => {
    useEffect(()=>{
                getData();
            })

    const [vector,setVector] = useState([]);

    const getData = async () => {

        const data = await

        fetch('https://jsonplaceholder.typicode.com/comments')

        const convert = await data.json();

        setVector(convert)

       

    }
  return (
    <div>
      <ul>
        {vector.map(objeto => (<li>{objeto.email}</li> ))}
      </ul>
    </div>
  )
}

export default Peticion
