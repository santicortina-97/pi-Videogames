import React, { useEffect } from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'
import { postGame, getGenres, getPlatforms } from '../../redux/actions'
import { formValidation } from '../../utils/validations'

import style from "./FormCreate.module.css"
import nintendo from "../../assets/NintendoForm.png"


const FormCreate = () => {

    const dispatch = useDispatch();
    let genres = useSelector((state) => state.genres) 
    let platforms = useSelector((state) => state.platforms) 

    useEffect(() =>{
        dispatch(getGenres())
        dispatch(getPlatforms())
    },[])
/*     console.log(platforms) */
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
    
    const navigate = useNavigate()

        const handleSubmit = (e) =>{
            e.preventDefault()
            if(!errors.name && !errors.image && !errors.platform && !errors.description && !errors.releaseDate && !errors.rating && !errors.genres){
                alert("Creado con éxito")
                navigate("/home")
                dispatch(postGame(game))
            }else{
                alert("Por favor, complete todos los campos")
            }
        }

    return (
    // <div className={style.container}>
    //     <div className={style.containerNintendo}>

    //     <form onSubmit={handleSubmit} /* style={{display:"flex", flexDirection:"column", width:"200px", marginLeft:"45%"}} */ className={style.form}>
    //         <label htmlFor="">Name:</label>
    //         <input type="text" name='name' value={game.name} onChange={handleChange}/>
    //         {errors.name && <span style={{color:"red"}}>{errors.name}</span>}


    //         <label htmlFor="">Image: </label>
    //         <input type="text" name='image' value={game.image} onChange={handleChange}/>
    //         {errors.image && <span style={{color:"red"}}>{errors.image}</span>}


    //         <label htmlFor="">Platforms:</label>
    //         <select name="platform" onChange={handleChange} defaultValue="">
    //             <option value="" disabled>Platforms</option>
    //             {platforms.platforms?.map((platftorm) =>(
    //                 <option key={platftorm.id} value={platforms.name} onChange={handleChange}>{platftorm}</option>
    //             ))}
    //         </select>
    //         {errors.platform && <span style={{color:"red"}}>{errors.platform}</span>}

    //         <label htmlFor="">Description:</label>
    //         <input type="text" name='description' value={game.description} onChange={handleChange}/>
    //         {errors.description && <span style={{color:"red"}}>{errors.description}</span>}


    //         <label htmlFor="">Release Date:</label>
    //         <input type="text" name='releaseDate' value={game.releaseDate} onChange={handleChange}/>
    //         {errors.releaseDate && <span style={{color:"red"}}>{errors.releaseDate}</span>}


    //         <label htmlFor="">Rating:</label>
    //         <input type="text" name='rating' value={game.rating} onChange={handleChange}/>
    //         {errors.rating && <span style={{color:"red"}}>{errors.rating}</span>}


    //         <label htmlFor="">Genres:</label>
    //         <select name="genres" onChange={handleChange} defaultValue="">
    //             <option value="" disabled>Genres</option>
    //             {genres.genresData?.map((genre) =>(
    //                 <option key={genre.id} value={genres.name} onChange={handleChange}>{genre.name}</option>
    //             ))}
    //         </select>
    //         {errors.genres ? <span style={{color:"red"}}>{errors.genres}</span> : null}

    //         <button type='submit' onClick={handleSubmit}>Create</button>
    //             {/* //!Mostrar lo que va a crear */}
    //             <img src={game.image} alt="" />
    //             <p>{game.name}</p>
    //             <p>{game.description}</p>
    //             <p>{game.platform}</p>
    //             <p>{game.releaseDate}</p>
    //             <p>{game.rating}</p>
    //             <p>{game.genres}</p>
    //     </form>
    //     </div>
    // </div>

    //!PRUEBA
//     <div className={style.container}>
//     <div className={style.containerNintendo}>
//         <div className={style.info}>
//             {/* <img src={game.image} alt="" /> */}
//             <div className={style.imageName}>
//                 {game.image && <img src={game.image} className={style.image} />}
//                 <p>{game.name}</p>
//                 <div className={style.dataRating}>
//                     <p>{game.releaseDate}</p>
//                     <p>{game.rating}</p>
//                 </div>
//             </div>
//             <div className={style.datos}>
//                 <p>{game.description}</p>
//                 <p>{game.platform.join(' - ')}</p>
//                 <p>{game.genres.join(' - ')}</p>
//             </div>
//         </div>

//     <form onSubmit={handleSubmit} /* style={{display:"flex", flexDirection:"column", width:"200px", marginLeft:"45%"}} */ className={style.form}>
//         <div className={style.containerForm}>

//             <div className={style.form1}>
//                 <div>
// {/*                 <label htmlFor="">Name:</label> */}
//                     <input type="text" name='name' value={game.name} onChange={handleChange} placeholder='Name:'/>
//                     {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
//                 </div>

//                 <div>
//     {/*                 <label htmlFor="">Image: </label> */}
//                     <input type="text" name='image' value={game.image} onChange={handleChange} placeholder='Image:'/>
//                     {errors.image && <p style={{color:"red"}}>{errors.image}</p>}
//                 </div>

//                 <div>
//     {/*                 <label htmlFor="">Description:</label> */}
//                     <input type="text" name='description' value={game.description} onChange={handleChange} placeholder='Description:'/>
//                     {errors.description && <p style={{color:"red"}}>{errors.description}</p>}
//                 </div>

//                 <div>
//     {/*                 <label htmlFor="">Release Date:</label> */}
//                     <input type="text" name='releaseDate' value={game.releaseDate} onChange={handleChange} placeholder='Release Date:'/>
//                     {errors.releaseDate && <p style={{color:"red"}}>{errors.releaseDate}</p>}
//                 </div>

//                 <div>
//     {/*                 <label htmlFor="">Rating:</label> */}
//                     <input type="text" name='rating' value={game.rating} onChange={handleChange} placeholder='Rating:'/>
//                     {errors.rating && <p style={{color:"red"}}>{errors.rating}</p>} 
//                 </div>
//             </div>

//             <div className={style.form2}>
//                 <label htmlFor="">Platforms:</label>
//                 <select name="platform" onChange={handleChange} defaultValue="">
//                     <option value="" disabled>Platforms</option>
//                     {platforms.platforms?.map((platftorm) =>(
//                         <option key={platftorm.id} value={platforms.name} onChange={handleChange}>{platftorm}</option>
//                     ))}
//                 </select>
//                 {errors.platform && <span style={{color:"red"}}>{errors.platform}</span>}

//                 <label htmlFor="">Genres:</label>
//                 <select name="genres" onChange={handleChange} defaultValue="">
//                     <option value="" disabled>Genres</option>
//                     {genres.genresData?.map((genre) =>(
//                         <option key={genre.id} value={genres.name} onChange={handleChange}>{genre.name}</option>
//                     ))}
//                 </select>
//                 {errors.genres ? <span style={{color:"red"}}>{errors.genres}</span> : null}


//             </div>
//         </div>






//         <button type='submit' onClick={handleSubmit}>Create</button>
//     </form>
//     </div>
// </div>
    //!PRUEBA 2
    <div>
        <NavLink to={"/home"}><button className={style.back}>Back</button></NavLink>
        <div className={style.container}>
            <div>
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.containerForm}>

                    <div className={style.form1}>
                        <div>
        {/*                 <label htmlFor="">Name:</label> */}
                            <input type="text" name='name' value={game.name} onChange={handleChange} placeholder='Name:' className={style.input}/>
                            {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                        </div>

                        <div>
            {/*                 <label htmlFor="">Image: </label> */}
                            <input type="text" name='image' value={game.image} onChange={handleChange} placeholder='Image:' className={style.input}/>
                            {errors.image && <p style={{color:"red"}}>{errors.image}</p>}
                        </div>

                        <div>
            {/*                 <label htmlFor="">Description:</label> */}
                            <input type="text" name='description' value={game.description} onChange={handleChange} placeholder='Description:' className={style.input}/>
                            {errors.description && <p style={{color:"red"}}>{errors.description}</p>}
                        </div>

                        <div>
            {/*                 <label htmlFor="">Release Date:</label> */}
                            <input type="text" name='releaseDate' value={game.releaseDate} onChange={handleChange} placeholder='Release Date:' className={style.input}/>
                            {errors.releaseDate && <p style={{color:"red"}}>{errors.releaseDate}</p>}
                        </div>

                        <div>
            {/*                 <label htmlFor="">Rating:</label> */}
                            <input type="text" name='rating' value={game.rating} onChange={handleChange} placeholder='Rating:' className={style.input}/>
                            {errors.rating && <p style={{color:"red"}}>{errors.rating}</p>} 
                        </div>
                    </div>

                    <div className={style.form2}>
                        <label htmlFor="">Platforms:</label>
                        <select name="platform" onChange={handleChange} defaultValue="" className={style.input}>
                            <option value="" disabled>Platforms</option>
                            {platforms.platforms?.map((platftorm) =>(
                                <option key={platftorm.id} value={platforms.name} onChange={handleChange}>{platftorm}</option>
                            ))}
                        </select>
                        {errors.platform && <span style={{color:"red"}}>{errors.platform}</span>}

                        <label htmlFor="">Genres:</label>
                        <select name="genres" onChange={handleChange} defaultValue="" className={style.input}>
                            <option value="" disabled>Genres</option>
                            {genres.genresData?.map((genre) =>(
                                <option key={genre.id} value={genres.name} onChange={handleChange}>{genre.name}</option>
                            ))}
                        </select>
                        {errors.genres ? <span style={{color:"red"}}>{errors.genres}</span> : null}
                    </div>
                </div>
                <button type='submit' onClick={handleSubmit} className={style.create}>Create</button>
            </form>
            </div>
            <div className={style.containerNintendo}>
                <div className={style.info}>
                    {/* <img src={game.image} alt="" /> */}
                    <div className={style.imageName}>
                        {game.image && <img src={game.image} className={style.image} />}
                        <p>{game.name}</p>
                        <div className={style.dataRating}>
                            <p>{game.releaseDate}</p>
                            <p>{game.rating}</p>
                        </div>
                    </div>
                    <div className={style.datos}>
                        <p>{game.description}</p>
                        <div className={style.platform}>
                        {game.platform && game.platform.map((platf) => <button className={style.button}>{platf} ❌</button>)}
                        </div>
                            {/* <button>{game.platform.join(' - ')}</button> */}
                            {/* <button>{game.genres.join(' - ')}</button> */}
                        <div className={style.genre}>
                            {game.genres && game.genres.map((genre) => <button className={style.button}>{genre} ❌</button>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FormCreate
