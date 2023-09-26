const {Videogame} = require("../db")

const postVideogamesController = async (req, res) =>{
    try {
        const {id, name, description, platform, image, releaseDate, rating} = req.body;
        const existGame = await Videogame.findOne({where: {name}})
        if(existGame){
            return res.status(400).json({error: "Ya existe un juego con ese nombre"})
        }
        const newGame = await Videogame.create({id, name, description, platform, image, releaseDate, rating})
        return res.status(200).json(newGame)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports={postVideogamesController}