import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
  return (
    <div className='card' key={data.id} >
        <h3>{data.name}</h3>
        <p>{data.status}</p>
        <img src={data.image} alt="character-detail" />
        <Link to= {'/character/'+ data.id} >Ver detalles</Link>
    </div>
  )
}

export default Card