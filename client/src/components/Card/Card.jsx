import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Card.module.css"

const Card = ({game}) => {
  console.log(game)
  const {image, name, id, rating,genres} = game
/*   console.log(platform) */
  return (
    <div className={style.card}>
      <div className={style.cardInner}>
        <div className={style.cardFront}>
            <img src={image} alt="" className={style.image}/>
            <h2 className={style.name}>{name}</h2>
        </div>
        <div className={style.cardBack}>
          <div className={style.idRating}>
            <p>Id: {id}</p>
            <p>Rating: {rating}</p>
          </div>
          <div className={style.genres}>
          {genres?.map((genre, index) => (
            <span key={index}>
              {genre.name}
              {index < genres.length - 1 && ','}
            </span>
          ))}

          </div>
            <Link to={`/detail/${id}`} style={{textDecoration:"none"}}><h2 className={style.detail}>Detail</h2></Link>
        </div>
      </div>
    </div>
  )
}

export default Card