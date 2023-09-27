const axios = require("axios");
const {Op} = require("sequelize")
const {Videogame} = require("../db")
const {API_KEY} = process.env
/* console.log(API_KEY) */

const getNameController = async (req, res) =>{
            
    const {name} = req.query;
    try {
        const {data} = await axios(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
        if(data.results && data.results.length > 0){
            const first15Results = data.results.slice(0,16);
            const videogame = first15Results.map(game =>({
                id: game.id,
                name: game.name,
                description: game.description
            }));
            return res.status(200).json(videogame)
        }else{
            const dbVideogame = await Videogame.findAll()
            if(dbVideogame){
                return res.status(200).json({
                    id: dbVideogame.id,
                    name: dbVideogame.name,
                    description: dbVideogame.description
                })
            }else{
                res.status(404).send("Videojuego no encontrado")
            }
        }
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports={getNameController}