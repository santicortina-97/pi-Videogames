import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState} from "react"
import { getGames, getByName } from "../../redux/actions"

import React from 'react'
import Cards from '../../components/Cards/Cards'
import Navbar from "../../components/Navbar/Navbar"

const HomePage = () => {

    const dispatch = useDispatch();
    const allGame = useSelector((state) => state.allGame) //Estar suscripto al estado, cuando se modifique el estado tambien se modifica el componente

    //!Filtro por nombre con el back
    const[search, setSearch] = useState("")
    function handleChange(e){
        e.preventDefault();
        setSearch(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getByName(search))
    }

    useEffect(() =>{
        dispatch(getGames())
    },[])

    return (
        <div>
            <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
            <h2>Home</h2>
            <Cards allGame={allGame}/>
        </div>
    )
}

export default HomePage