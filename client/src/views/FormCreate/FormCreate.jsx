import React, { useEffect } from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { postGame, getGenres, getPlatforms } from '../../redux/actions'
import { formValidation } from '../../utils/validations'


const FormCreate = () => {
    const dispatch = useDispatch();
    let genres = useSelector((state) => state.genres) 
    let platforms = useSelector((state) => state.platforms) 

    useEffect(() =>{
        dispatch(getGenres())
        dispatch(getPlatforms())
    },[])
/*     console.log(genres) */
    const [game, setGame] = useState({
            name: "",
            description: "",
            image: "",
            releaseDate: "",
            rating: "",
            platform: [],
            genres:[],
    })

    const [errors, setErrors] = useState({
            name: "",
            description: "",
            image: "",
            releaseDate: "",
            rating: "",
            platform: "",
            genres:"",
    })

//     const handleChange = (e) => {
//         const {name, value } = e.target;
    
//         if(name === 'genres' || name === 'platform'){
//             if(!game[name].includes(value)){
//                 setGame((prevGame)=> ({
//                     ...prevGame,
//                     [name]: [...prevGame[name],value],
//                 }));
//             }
//         }else{
//             setGame({...game, [name]:value})
//         }
// /*         const fieldErrors = formValidation({ ...game, [name]: value });
//         setErrors({ ...errors, [name]: fieldErrors[name] }); */
//         setErrors(
//             formValidation({
//                 ...game,
//                 [e.target.name]: e.target.value
//             })
//         )
//     }
    const handleChange = (e) => {
        const { name, value } = e.target;
    
        let updatedGame = { ...game };
    
        if (name === 'genres' || name === 'platform') {
        if (!updatedGame[name].includes(value)) {
            updatedGame[name] = [...updatedGame[name], value];
        }
        } else {
        updatedGame = { ...updatedGame, [name]: value };
        }
    
        // Validamos todos los campos y obtenemos los errores actualizados
        const updatedErrors = formValidation(updatedGame);
    
        // Actualizar el estado de juego y errores
        setGame(updatedGame);
        setErrors(updatedErrors);
    };
    

        const handleSubmit = (e) =>{
            e.preventDefault()
            if(!errors.name && !errors.image && !errors.platform && !errors.description && !errors.releaseDate && !errors.rating && !errors.genres){
                dispatch(postGame(game))
            }
        }
/*         console.log(game) */
    return (
    <div>
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"200px", marginLeft:"45%"}}>
            <label htmlFor="">Name:</label>
            <input type="text" name='name' value={game.name} onChange={handleChange}/>
            {errors.name && <span style={{color:"red"}}>{errors.name}</span>}


            <label htmlFor="">Image: </label>
            <input type="text" name='image' value={game.image} onChange={handleChange}/>
            {errors.image && <span style={{color:"red"}}>{errors.image}</span>}


            <label htmlFor="">Platforms:</label>
            <select name="platform" onChange={handleChange} defaultValue="">
                <option value="" disabled>Platforms</option>
                {platforms.platforms?.map((platftorm) =>(
                    <option key={platftorm.id} value={platforms.name} onChange={handleChange}>{platftorm}</option>
                ))}
            </select>
            {errors.platform && <span style={{color:"red"}}>{errors.platform}</span>}

            <label htmlFor="">Description:</label>
            <input type="text" name='description' value={game.description} onChange={handleChange}/>
            {errors.description && <span style={{color:"red"}}>{errors.description}</span>}


            <label htmlFor="">Release Date:</label>
            <input type="text" name='releaseDate' value={game.releaseDate} onChange={handleChange}/>
            {errors.releaseDate && <span style={{color:"red"}}>{errors.releaseDate}</span>}


            <label htmlFor="">Rating:</label>
            <input type="text" name='rating' value={game.rating} onChange={handleChange}/>
            {errors.rating && <span style={{color:"red"}}>{errors.rating}</span>}


            <label htmlFor="">Genres:</label>
            <select name="genres" onChange={handleChange} defaultValue="">
                <option value="" disabled>Genres</option>
                {genres.genresData?.map((genre) =>(
                    <option key={genre.id} value={genres.name} onChange={handleChange}>{genre.name}</option>
                ))}
            </select>
            {errors.genres ? <span style={{color:"red"}}>{errors.genres}</span> : null}

            <button type='submit' onClick={handleSubmit}>Crear</button>
                {/* //!Mostrar lo que va a crear */}
                <img src={game.image} alt="" />
                <p>{game.name}</p>
                <p>{game.description}</p>
                <p>{game.platform}</p>
                <p>{game.releaseDate}</p>
                <p>{game.rating}</p>
                <p>{game.genres}</p>
        </form>
    </div>
    )
}

export default FormCreate




// const FormCreate = () => {
//     const dispatch = useDispatch();

//     let genres = useSelector((state) => state.genres)
//     let platforms = useSelector((state) => state.platforms)

//     useEffect(() =>{
//         dispatch(getGenres())
//         dispatch(getPlatforms())
//     },[])
// /*     console.log(platforms) */
    

//     const [game, setGame] = useState({
//         name: "",
//         description: "",
//         image: "",
//         releaseDate: "",
//         rating: "",
//         platform: '',
//         genres:[],
//     })

    // const handleChange = (e) => {
    // const {name, value } = e.target;

    // if(name === 'genres' || name === 'platform'){
    //     setGame((prevGame)=> ({
    //         ...prevGame,
    //         [name]: [...prevGame[name],value],
    //     }));
    // }else{
    //     setGame({...game, [name]:value})
    // }}

//     const handleSubmit = (e) =>{
//         e.preventDefault(),
//         dispatch(postGame(game))
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"200px", marginLeft:"45%"}}>
// {/*                 //!Name */}
//                 <label htmlFor="">Name:</label>
//                 <input type="text" name='name' value={game.name} onChange={handleChange}/>
// {/*                 //!Image */}
//                 <label htmlFor="">Image:</label>
//                 <input type="text" name='image' value={game.image} onChange={handleChange}/>
// {/*                 //!Platform */}
//                 <label htmlFor="">Platforms:</label>
//                 <select name="platform"  /* value={game.platform} */ id="" onChange={handleChange}>
//                 <option value="" disabled selected>
//                     Platforms
//                 </option>
//                 {platforms.platforms?.map((platform) =>(
//                     <option key={platform.id} value={platform.name}>{platform}</option>
//                 ))}
//                 </select>
// {/*                 //!Description */}
//                 <label htmlFor="">Description:</label>
//                 <input type="text" name='description' value={game.description} onChange={handleChange}/>
// {/*                 //!Release Date */}
//                 <label htmlFor="">Release Date:</label>
//                 <input type="text" name='releaseDate' value={game.releaseDate} onChange={handleChange}/>
// {/*                 //!Rating */}
//                 <label htmlFor="">Rating:</label>
//                 <input type="text" name='rating' value={game.rating} onChange={handleChange}/>
// {/*                 //!genres */}
//                 <label htmlFor="genres">Genres:</label>

//                 <select name="genres"  /* value={game.genres} */ id="" onChange={handleChange}>
//                     <option value="" disabled selected>
//                         Genres
//                     </option>
//                     {genres.genresData?.map((genre) => (
                    
//                     <option key={genre.id} >
//                         {genre.name}
//                     </option>
//                     ))}
//                 </select>

//                 <button type='submit'>Crear</button>
//             </form>
//             <div>
//                 {game.genres.map((genreSelect) =>(
//                     <div >
//                         <div style={{display: 'flex', justifyContent:'center'}}>
//                         <li>{genreSelect}</li>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default FormCreate

