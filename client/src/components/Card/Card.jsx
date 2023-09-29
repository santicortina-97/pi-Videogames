import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({game}) => {
  /* console.log(game) */
  const {image, name, id} = game
  return (
    <div>
      <img src={image} alt="" style={{width:"300px"}}/>
      <Link to={`/detail/${id}`}><h2>Name:{name}</h2></Link>
      
    </div>
  )
}

export default Card