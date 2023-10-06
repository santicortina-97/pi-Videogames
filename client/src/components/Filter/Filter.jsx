import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { order, filterGenre, getGenres} from '../../redux/actions'
import Cards from '../Cards/Cards'


const Filter = () => {
    const dispatch = useDispatch();
    const orden = useSelector((state) => state.allGame)
    const filtered = useSelector((state) => state.allGame)
    const genres = useSelector((state) => state.genres)

    useEffect(() =>{
        dispatch(getGenres())
    },[])

console.log(filtered)
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
        <div>
            <div>
                <h2>Order Rating</h2>
                <input type="checkbox" value="ascendentRating" onChange={handleOrder} checked={ascendentRatingCheckbox}/><label htmlFor="">Ascendente</label>
                <input type="checkbox" value="descendentRating" onChange={handleOrder} checked={descendentRatingCheckbox}/><label htmlFor="">Descendente</label>
            </div>
            <div>
                <h2>Order Name</h2>
                <input type="checkbox" value="ascendentName" onChange={handleOrder} checked={ascendentNameCheckbox}/><label htmlFor="">ascendentName</label>
                <input type="checkbox" value="descendentName" onChange={handleOrder} checked={descendentNameCheckbox}/><label htmlFor="">descendentName</label>
            </div>
            <div>
                <h2>Filter genre</h2>
                <input type="checkbox" value="All" name='genres' onChange={handleFilter}/><label htmlFor="">All</label>
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
            <Cards allGame={orden} filterGenre={filtered} />
        </div>
    )
}

export default Filter