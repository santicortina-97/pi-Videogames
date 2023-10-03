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
/*     console.log(platforms) */
    

    const [game, setGame] = useState({
        name: "",
        description: "",
        image: "",
        releaseDate: "",
        rating: "",
        platform: '',
        genres:[],
    })

        const handleChange = (e) => {
        const {name, value } = e.target;

        if(name === 'genres' || name === 'platform'){
            setGame((prevGame)=> ({
                ...prevGame,
                [name]: [...prevGame[name],value],
            }));
        }else{
            setGame({...game, [name]:value})
        }}
    
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
                <label htmlFor="">Platforms:</label>
                <select name="platform"  /* value={game.platform} */ id="" onChange={handleChange}>
                <option value="" disabled selected>
                    Platforms
                </option>
                {platforms.platforms?.map((platform) =>(
                    <option key={platform.id} value={platform.name}>{platform}</option>
                ))}
                </select>
{/*                 //!Description */}
                <label htmlFor="">Description:</label>
                <input type="text" name='description' value={game.description} onChange={handleChange}/>
{/*                 //!Release Date */}
                <label htmlFor="">Release Date:</label>
                <input type="text" name='releaseDate' value={game.releaseDate} onChange={handleChange}/>
{/*                 //!Rating */}
                <label htmlFor="">Rating:</label>
                <input type="text" name='rating' value={game.rating} onChange={handleChange}/>
{/*                 //!genres */}
                <label htmlFor="genres">Genres:</label>

                <select name="genres"  /* value={game.genres} */ id="" onChange={handleChange}>
                    <option value="" disabled selected>
                        Genres
                    </option>
                    {genres.genresData?.map((genre) => (
                    
                    <option key={genre.id} >
                        {genre.name}
                    </option>
                    ))}
                </select>

                <button type='submit'>Crear</button>
            </form>
            <div>
                {game.genres.map((genreSelect) =>(
                    <div >
                        <div style={{display: 'flex', justifyContent:'center'}}>
                        <li>{genreSelect}</li>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FormCreate



/* const FormCreate = () => {
    return (
            <div>
                <form action="">
                    <label htmlFor="">Name:</label>
                    <input type="text" />
                    <label htmlFor="">Description:</label>
                    <input type="text" />
                    <label htmlFor="">Platform:</label>
                    <input type="text" />
                    <label htmlFor="">Image:</label>
                    <input type="text" />
                    <label htmlFor="">ReleaseDate:</label>
                    <input type="text" />
                    <label htmlFor="">Rating:</label>
                    <input type="text" />
                    <label htmlFor="">Genres:</label>
                    <input type="text" />
                    <button>Crear</button>
                </form>
            </div>
    )
}

export default FormCreate
 */
