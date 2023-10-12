import React from 'react'
import Card from '../Card/Card'
import style from "./Cards.module.css"

const Cards = ({allGame}) => {
  const gamesList = allGame

  return (
    <div className={style.container}>
      {gamesList.map((game) =><Card key={game.id} game={game}/>)}
    </div>
  )
}

export default Cards