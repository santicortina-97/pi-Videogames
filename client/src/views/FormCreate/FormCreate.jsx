import React, { useEffect } from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'
import { postGame, getGenres, getPlatforms } from '../../redux/actions'
import { formValidation } from '../../utils/validations'

import style from "./FormCreate.module.css"


const FormCreate = () => {

    const dispatch = useDispatch();
    let genres = useSelector((state) => state.genres) 
    let platforms = useSelector((state) => state.platforms) 

    useEffect(() =>{
        dispatch(getGenres())
        dispatch(getPlatforms())
    },[])

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
                dispatch(postGame(game))
                alert("Successfully created")
                navigate("/home")
            }else{
                alert("Please complete all fields")
            }
        }



    return (
    <div>
        <NavLink to={"/home"}><button className={style.back}>Back</button></NavLink>
        <div className={style.container}>
            <div>
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.containerForm}>

                    <div className={style.form1}>
                        <div>
                            <input type="text" name='name' value={game.name} onChange={handleChange} placeholder='Name:' className={style.input}/>
                            {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                        </div>

                        <div>
                            <input type="text" name='image' value={game.image} onChange={handleChange} placeholder='Image:' className={style.input}/>
                            {errors.image && <p style={{color:"red"}}>{errors.image}</p>}
                        </div>

                        <div>
                            <input type="text" name='description' value={game.description} onChange={handleChange} placeholder='Description:' className={style.input}/>
                            {errors.description && <p style={{color:"red"}}>{errors.description}</p>}
                        </div>

                        <div>
                            <input type="text" name='releaseDate' value={game.releaseDate} onChange={handleChange} placeholder='Release Date:' className={style.input}/>
                            {errors.releaseDate && <p style={{color:"red"}}>{errors.releaseDate}</p>}
                        </div>

                        <div>
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
                        {game.platform && game.platform.map((platf) => <p className={style.button}>{platf}</p>)}
                        </div>
                        <div className={style.genre}>
                            {game.genres && game.genres.map((genre) => <p className={style.button}>{genre}</p>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FormCreate
