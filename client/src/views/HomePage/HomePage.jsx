import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState} from "react"
import { getGames, getByName, order, filterGenre, getGenres, cleanFilter, filterDb, loading } from "../../redux/actions"

import React from 'react'
import Cards from '../../components/Cards/Cards'
import Navbar from "../../components/Navbar/Navbar"
/* import Filter from "../../components/Filter/Filter" */
import Paginate from "../../components/Paginate/Paginate"
import style from "./Home.module.css"

const HomePage = () => {

    const dispatch = useDispatch();
    const allGame = useSelector((state) => state.allGame) //Estar suscripto al estado, cuando se modifique el estado tambien se modifica el componente
    const isLoading = useSelector((state) => state.loading)
    //!PAGINADO
        const [currentPage, setCurrentPage] = useState(1) //Pagina actual, arranca en 1
    const [gamePerPage, setGamePerPage] = useState(15) //juegos por pagina
    const indexLastGame = currentPage * gamePerPage //15
    const indexFirstGame = indexLastGame - gamePerPage //0
    const currentGame = allGame.slice(indexFirstGame, indexLastGame)
    
    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }
    //!FILTROS
    const orden = useSelector((state) => state.allGame)
    const filtered = useSelector((state) => state.allGame)
    const genres = useSelector((state) => state.genres)
/*     console.log(orden) */
const [aux, setAux] = useState(false)

function handleDbFilter(e) {
    dispatch(filterDb(e.target.value));
}



    function handleOrder(e){
        dispatch(order(e.target.value))
        setAux(true)
    }

    function handleFilter(e) {
        dispatch(filterGenre(e.target.value));
    }
    
    


    function clean(){
        dispatch(cleanFilter())
        const selectElements = document.getElementsByTagName("select");
        for (let select of selectElements) {
            select.selectedIndex = 0;
        }
    }

    //!Busqueda por nombre
    const[search, setSearch] = useState("")
    function handleChange(e){
        e.preventDefault();
        setSearch(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(search){
            dispatch(getByName(search))
        }else{
            alert("No hay Viseojuegos")
        }
    }
    //Restablecer la busqueda
    function resetSearch(){
        setSearch("")
    }

    useEffect(() =>{
        dispatch(getGames())
        dispatch(getGenres())
        dispatch(loading())
    },[])

    return (
        <div>
            <Navbar handleChange={handleChange} handleSubmit={handleSubmit} resetSearch={resetSearch}/>
            <Paginate   gamePerPage={gamePerPage} allGame={allGame.length} paginado={paginado}/>
            <div className={style.container}>
                {isLoading ? (
                    <div>Cargando...</div>
                ): (
                    <>
                    <div className={style.filterContainer}>
                        <div className={style.buttons}>
                            <select onChange={handleDbFilter}>
                                <option value="" disabled>Select</option>
                                <option value="All">API</option>
                                <option value="DB">DB</option>
                            </select>

                            <button onClick={clean}>Reset</button>
                        </div>
                        <div className={style.rating}>
                            <h3 className={style.title}>Order Rating</h3>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <select name="" id="" onChange={handleOrder}>
                                    <option value="ascendentRating">Ascendent</option>
                                    <option value="descendentRating">Descendent</option>
                                </select>
                            </div>
                        </div>
                        <div className={style.name}>
                            <h3 className={style.title}>Order Name</h3>
                                <select name="" id="" onChange={handleOrder}>
                                    <option value="ascendentName">A-Z</option>
                                    <option value="descendentName">Z-A</option>
                                </select>
                        </div>
                        <div className={style.genre}>
                            <h3 className={style.title}>Filter genre</h3>
                            <select name='genres' id="" onChange={handleFilter}>
                                {genres.genresData?.map((genre) => (
                                            <option value={genre.name}>{genre.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <Cards allGame={currentGame} filterGenre={filtered}/>
                    </>
                )}
            </div>
        </div>
    )
}

export default HomePage