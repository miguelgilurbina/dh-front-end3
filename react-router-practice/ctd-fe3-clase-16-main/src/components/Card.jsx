import React from 'react'
import { Link } from 'react-router-dom'
Link
const Card = ({data}) => {
  return (
    <div className='card' key={data.id} >
        <h3>{data.name}</h3>
        <p>{data.tagline}</p>
        <img src={data.image_url} alt="beer-detail" />
    </div>
  )
}

export default Card