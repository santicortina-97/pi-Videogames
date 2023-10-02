import React, { useEffect } from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { postGame, getGenres, getPlatforms } from '../../redux/actions'

const FormCreate = () => {
    const dispatch = useDispatch();
    let genres = useSelector((state) => state.genres)
    let platforms = useSelector((state) => state.platforms)

    useEffect(() =>{
        dispatch(getGenres())
        dispatch(getPlatforms())
    },[])
    console.log(platforms)
    
    
    const [game, setGame] = useState({
        name: "",
        description: "",
        image: "",
        releaseDate: "",
        rating: "",
        platform: [],
        genres:[],
    })

    const handleChange = (e) => {
        if (e.target.name === "genres" || e.target.name === "platform") {
            /* setGame({ ...game, [e.target.name]: [...game.genres, e.target.value] }); */
            setGame({ ...game, [e.target.name]: [e.target.value] });
            } else {
            setGame({ ...game, [e.target.name]: e.target.value });
            }
        };
        
    
    const handleSubmit = (e) =>{
        e.preventDefault(),
        dispatch(postGame(game))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"200px", marginLeft:"45%"}}>
{/*                 //!Name */}
                <label htmlFor="">Name:</label>
                <input type="text" name='name' value={game.name} onChange={handleChange}/>
{/*                 //!Image */}
                <label htmlFor="">Image:</label>
                <input type="text" name='image' value={game.image} onChange={handleChange}/>
{/*                 //!Platform */}
                <label htmlFor="">Generes:</label>
                <select name="genres" value={game.platform} id="" onChange={handleChange}>
                <option value="" disabled>
                    Platforms
                </option>
                {platforms.platforms?.map((platform) =>(
                    <option>{platform}</option>
                ))}
                </select>
{/*                 {platforms.platforms?.map((platform) =>(
                    <option>{platform}</option>
                ))} */}
{/*                 //!Description */}
                <label htmlFor="">Description:</label>
                <input type="text" name='description' value={game.description} onChange={handleChange}/>
{/*                 //!Release Date */}
                <label htmlFor="">Release Date:</label>
                <input type="date" name='releaseDate' value={game.releaseDate} onChange={handleChange}/>
{/*                 //!Rating */}
                <label htmlFor="">Rating:</label>
                <input type="text" name='rating' value={game.rating} onChange={handleChange}/>
{/*                 //!genres */}
                <label htmlFor="">Generes:</label>
                <select name="genres" value={game.genres} id="" onChange={handleChange}>
                <option value="" disabled>
                    Genres
                </option>
                {genres.genresData?.map((genre) => (
                <option key={genre.id} value={genre.name}>{genre.name}</option>
                ))}
                </select>
                <button type='submit'>Crear</button>
            </form>
            <div>
                {game.genres.map((genreSelect) =>(
                    <li>{genreSelect}</li>
                ))}
            </div>
        </div>
    )
}

export default FormCreate