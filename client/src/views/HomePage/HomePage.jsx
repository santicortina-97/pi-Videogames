import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState} from "react"
import { getGames, getByName } from "../../redux/actions"

import React from 'react'
import Cards from '../../components/Cards/Cards'
import Navbar from "../../components/Navbar/Navbar"
import Filter from "../../components/Filter/Filter"

const HomePage = () => {

    const dispatch = useDispatch();
    const allGame = useSelector((state) => state.allGame) //Estar suscripto al estado, cuando se modifique el estado tambien se modifica el componente

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
    },[])

/*     console.log("hola") */
    return (
        <div>
            <Navbar handleChange={handleChange} handleSubmit={handleSubmit} resetSearch={resetSearch}/>
            <Filter/>
{/*             <Cards allGame={allGame}/> */}
        </div>
    )
}

export default HomePage