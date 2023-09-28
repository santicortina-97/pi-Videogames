import React from 'react'

const Card = ({game}) => {
  /* console.log(game) */
  const {image, name} = game
  return (
    <div>
      <img src={image} alt="" style={{width:"300px"}}/>
      <h2>Name:{name}</h2>
    </div>
  )
}

export default Card