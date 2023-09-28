import React from 'react'
import Card from '../Card/Card'

const Cards = ({allGame}) => {
  const gamesList = allGame
  /* console.log(gamesList) */
  /* const gamesList = Array.isArray(allGame.results) ? allGame.results : []; */

  return (
    <div>
      {gamesList.map((game) =><Card game={game}/>)}
    </div>
  )
}

export default Cards