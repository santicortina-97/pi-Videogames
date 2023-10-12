const {Videogame, Genres} = require("../db")

const postVideogamesController = async (req, res) =>{
    const {name, description, platform, image, releaseDate, rating, genres} = req.body;
    try {
        //Vemos si existe el juego
        const existGame = await Videogame.findOne({where:{name}});
        if(existGame){
            return res.status(400).json({error: "Ya existe un juego con ese nombre"})
        }
        //Creamos el nuevo juego
        const newGame = await Videogame.create({
            name,
            description,
            platform,
            image,
            releaseDate,
            rating,
            genres //Asociamos los generos
        })
        //Buscamos en el juego
            for(let i= 0; i< genres?.length; i++){
                const genre = await Genres.findOne({where:{name: genres[i]}})
                if(genre){
                    await newGame.addGenres(genre.id)
                }
            }
        // Buscamos el juego creado con sus géneros asociados
        const returnGame = await Videogame.findOne({
            where:{id: newGame.id},
            include:[
                {
                    model:Genres,
                    attributes: ["name"],
                    through: { attributes: [] },
                }
            ]
        });
        return res.status(200).json(returnGame)
    } catch (error) {
        res.status(500).json({ error: "Error al crear el juego", details: error.message });

    }
}

module.exports={postVideogamesController}