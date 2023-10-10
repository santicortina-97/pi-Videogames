import React from 'react'
import style from "./Paginate.module.css"

const Paginate = ({gamePerPage, allGame, paginado}) => {
    const pageNumbers = []

    for(let i=1; i <= Math.ceil(allGame/gamePerPage); i++){
        pageNumbers.push(i)
    }
    
    
    
        return (
        <div className={style.container}>
            <ul className={style.containerUl}>
                {pageNumbers && 
                    pageNumbers.map(number =>(
                        <li className={style.containerLi}>
                            <button onClick={() => paginado(number)} className={style.button}>{number}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Paginate