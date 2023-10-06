import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Card.module.css"

const Card = ({game}) => {
/*   console.log(game) */
  const {image, name, id} = game
  return (
    <div className={style.card}>
      <div className={style.cardInner}>
        <div className={style.cardFront}>
            <img src={image} alt="" className={style.image}/>
        </div>
        <div className={style.cardBack}>
            <Link to={`/detail/${id}`}><h2>Name:{name}</h2></Link>
        </div>
      </div>
    </div>
  )
}

export default Card