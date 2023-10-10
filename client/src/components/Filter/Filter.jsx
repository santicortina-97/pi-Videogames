// import React from 'react'
// import { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { order, filterGenre, getGenres, cleanFilter, filterDb} from '../../redux/actions'
// import Cards from '../Cards/Cards'
// import style from "./Filter.module.css"


// const Filter = () => {
//     const dispatch = useDispatch();
//     const orden = useSelector((state) => state.allGame)
//     const filtered = useSelector((state) => state.allGame)
//     const genres = useSelector((state) => state.genres)
// /*     console.log(orden) */
//     useEffect(() =>{
//         dispatch(getGenres())
//     },[])

// /* console.log(filtered) */
//     const [aux, setAux] = useState(false)

// function handleDbFilter(e) {
//     dispatch(filterDb(e.target.value));
// }



//     function handleOrder(e){
//         dispatch(order(e.target.value))
//         setAux(true)
//     }

//     function handleFilter(e) {
//         dispatch(filterGenre(e.target.value));
//     }
    
    


//     function clean(){
//         dispatch(cleanFilter())
//         const selectElements = document.getElementsByTagName("select");
//         for (let select of selectElements) {
//             select.selectedIndex = 0;
//         }
//     }

//     return (
//         <div className={style.container}>
//             <div>
//             </div>
//             <div className={style.filterContainer}>
//                 <div className={style.buttons}>
//                     <select onChange={handleDbFilter}>
//                         <option value="" disabled>Select</option>
//                         <option value="All">API</option>
//                         <option value="DB">DB</option>
//                     </select>

//                     <button onClick={clean}>Reset</button>
//                 </div>
//                 <div className={style.rating}>
//                     <h3 className={style.title}>Order Rating</h3>
//                     <div style={{display:"flex", flexDirection:"column"}}>
//                         <select name="" id="" onChange={handleOrder}>
//                             <option value="ascendentRating">Ascendent</option>
//                             <option value="descendentRating">Descendent</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className={style.name}>
//                     <h3 className={style.title}>Order Name</h3>
//                         <select name="" id="" onChange={handleOrder}>
//                             <option value="ascendentName">A-Z</option>
//                             <option value="descendentName">Z-A</option>
//                         </select>
//                 </div>
//                 <div className={style.genre}>
//                     <h3 className={style.title}>Filter genre</h3>
//                     <select name='genres' id="" onChange={handleFilter}>
//                         {genres.genresData?.map((genre) => (
//                                     <option value={genre.name}>{genre.name}</option>
//                         ))}
//                     </select>
//                 </div>
//             </div>
//             <Cards allGame={orden} filterGenre={filtered}/>
//         </div>
//     )
// }

// export default Filter