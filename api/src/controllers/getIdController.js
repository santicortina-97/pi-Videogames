const axios = require("axios")
const {Videogame, Genres} = require("../db")
require('dotenv').config();
const {API_KEY} = process.env

const getIdController = async (req, res) =>{
    try {
        const {id} = req.params;
        //Buscamos en la base
        //Si incluye un - busca como UUID
        if(id.includes("-")){
            const idDb = await Videogame.findOne({where:{id},//Tambien busca los generos de la Base
                include:[
                    {
                        model:Genres,
                        attributes: ["name"],
                        through: { attributes: [] },
                    }
                ]
            })
            if(idDb){
                return res.status(200).json(idDb)
            }
        }
        //Buscamos en la API
            const {data} = await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
            //Hacemos un mapeo y taremos todos los generos del juego
            const genresVideogame = data.genres.map((genero) =>({
                    id: genero.id,
                    name: genero.name
            }))
            //Hacemos un mapeo y taremos todas las plataformas del juego
            const platformVideogame = data.platforms.map((platform) => ({
                name: platform.platform.name //En la API la propiedad platform esta anidada dentro de otra propiedad platform
            }));
            
            const videogame = {
                id: data.id,
                name: data.name,
                image: data.background_image,
                imageAditional: data.background_image_additional,
                website: data.website,
                description: data.description,
                rating: data.rating,
                platform: platformVideogame,
                genres: genresVideogame
            };

            if(data){
                return res.status(200).json(videogame)
            }

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports={getIdController}