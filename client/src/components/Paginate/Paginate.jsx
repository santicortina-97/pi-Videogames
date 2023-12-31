import React from 'react'
import style from "./Paginate.module.css"

const Paginate = ({gamePerPage, allGame, paginado, currentPage}) => {
    const pageNumbers = []

    //Recorrer las paginas
    for(let i=1; i <= Math.ceil(allGame/gamePerPage); i++){
        pageNumbers.push(i)
    }

    //Cambiar de pagina
    const handleChangePage = (event) => {
        const selectedPage = parseInt(event.target.value, 10);
        paginado(selectedPage);
    };
    
    const handleNextPage = () =>{
        if(currentPage < pageNumbers.length){
            paginado(currentPage + 1)
        }
    }

    const handleBackPage = () =>{
        if(currentPage > 1){
            paginado(currentPage - 1)
        }
    }
    
        return (
        <div className={style.container}>
            <button onClick={handleBackPage} disabled={currentPage === 1} className={style.button}>Back</button>
            <select name="" id="" onChange={handleChangePage} value={currentPage} className={style.select}>
            {pageNumbers && 
                    pageNumbers.map(number =>(
                            <option key={number} value={number} className={style.option}>{number}</option>
                    ))
                }
            </select>
            <button onClick={handleNextPage} disabled={currentPage === pageNumbers.length} className={style.button}>Next</button>

        </div>
    )
}

export default Paginate