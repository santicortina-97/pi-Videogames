import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { order, filterGenre, getGenres} from '../../redux/actions'
import Cards from '../Cards/Cards'
import style from "./Filter.module.css"


const Filter = () => {
    const dispatch = useDispatch();
    const orden = useSelector((state) => state.allGame)
    const filtered = useSelector((state) => state.allGame)
    const genres = useSelector((state) => state.genres)

    useEffect(() =>{
        dispatch(getGenres())
    },[])

/* console.log(filtered) */
    const [aux, setAux] = useState(false)
    const [ascendentRatingCheckbox, setAscendentRatingCheckbox] = useState(false)
    const [descendentRatingCheckbox, setDescendentRatingCheckbox] = useState(false)
    const [ascendentNameCheckbox, setAscendentNameCheckbox] = useState(false)
    const [descendentNameCheckbox, setDescendentNameCheckbox] = useState(false)
    

    function handleOrder(e){
        setAscendentRatingCheckbox(e.target.value === "ascendentRating")
        setDescendentRatingCheckbox(e.target.value === "descendentRating")
        setAscendentNameCheckbox(e.target.value === "ascendentName")
        setDescendentNameCheckbox(e.target.value === "descendentName")
/*         dispatch(order(e.target.value)) */
        dispatch(order(e.target.value))
        setAux(true)
    }

    function handleFilter(e){
/*         if(e.target.value === "All"){
            dispatch(filterGenre(e.target.value))
        }else{ */
            dispatch(filterGenre(e.target.value))
/*         } */
    }


    return (
        <div className={style.container}>
            <div>
            </div>
            <div className={style.filterContainer}>
                <div>
                    <input type="checkbox" />
                    <label htmlFor="">My Games</label>
                </div>
                <div className={style.rating}>
                    <h3 className={style.title}>Order Rating</h3>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <div>
                            <input type="checkbox" value="ascendentRating" onChange={handleOrder} checked={ascendentRatingCheckbox}/>
                            <label htmlFor="">Ascendent</label>
                        </div>
                        <div>
                            <input type="checkbox" value="descendentRating" onChange={handleOrder} checked={descendentRatingCheckbox}/>
                            <label htmlFor="">Descendent</label>
                        </div>
                    </div>
                </div>
                <div className={style.name}>
                    <h3 className={style.title}>Order Name</h3>
                    <div>
                        <input type="checkbox" value="ascendentName" onChange={handleOrder} checked={ascendentNameCheckbox}/>
                        <label htmlFor="">Ascendent</label>                        
                    </div>
                    <div>
                        <input type="checkbox" value="descendentName" onChange={handleOrder} checked={descendentNameCheckbox}/>
                        <label htmlFor="">Descendent</label>
                    </div>
                </div>
                <div className={style.genre}>
                    <h3 className={style.title}>Filter genre</h3>
                    <div>
                        <input type="checkbox" value="All" name='genres' onChange={handleFilter}/>
                        <label htmlFor="">All</label>
                    </div>
                {genres.genresData?.map((genre) => (
                    <div key={genre.id}>
                        <input
                            type="checkbox"
                            value={genre.name}
                            name='genres'
                            onChange={handleFilter}
                        />
                        <label>{genre.name}</label>
                    </div>
                ))}
                </div>
            </div>
            <Cards allGame={orden} filterGenre={filtered}/>
        </div>
    )
}

export default Filter