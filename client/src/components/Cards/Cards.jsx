import React from 'react'
import Card from '../Card/Card'
import style from "./Cards.module.css"

const Cards = ({allGame}) => {
  const gamesList = allGame
  /* console.log(gamesList) */
  /* const gamesList = Array.isArray(allGame.results) ? allGame.results : []; */

  return (
    <div className={style.container}>
      {gamesList.map((game) =><Card game={game}/>)}
    </div>
  )
}

export default Cards