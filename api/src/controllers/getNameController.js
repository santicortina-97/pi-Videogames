const axios = require("axios");
const {Op} = require("sequelize")
const {Videogame, Genres} = require("../db")
const {API_KEY} = process.env
/* console.log(API_KEY) */

const getNameController = async (req, res) =>{
//!API UNICAMENTE
/*     const {name} = req.query;
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
            const dbVideogame = await Videogame.findAll({where:{
                name:{
                    [Op.iLike]: `%${name}%`
                }
            }})
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
    } */
//!BASE DE DATOS UNICAMENTE
/*     const {name} = req.query;
    try {
        const dbVideogame = await Videogame.findAll({where:{
            name:{
                [Op.iLike]: `%${name}%`
            }
        }
    });
    if(dbVideogame.length > 0){
        const dbGame = dbVideogame.map(game =>({
            id: game.id,
            name: game.name,
            platform: game.platform
        }));
        return res.status(200).json(dbGame)
    }else{
        return res.status(404).json({message:"No se encontarron juegos en la Base de Datos"})
    }
    } catch (error) {
        return res.status(500).send(error.message)
    } */
    const {name} = req.query;
    try {
        let games = [];
        //Buscamos en la Base de Datos
        const dbVideogame = await Videogame.findAll({where:{
            name:{
                [Op.iLike]: `%${name}%`
            },
        },
            include:[
                {
                    model:Genres,
                    attributes: ["name"],
                    through: { attributes: [] },
                }
            ]
    });

    if(dbVideogame.length > 0){
        const dbGame = dbVideogame.map(game =>(game));
        games.push(...dbGame)
    }
    //Buscamos en la API
    const {data} = await axios(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
    if(data.results && data.results.length > 0){
        const first15Results = data.results.slice(0,16);
        const videogame = first15Results.map(game =>({
            id: game.id,
            name: game.name.toLowerCase(),
            description: game.description,
            platform: game.platforms.map(platform => ({
                name: platform.platform.name
            }))
        }));
        games.push(...videogame)
    }
    return res.status(200).json(games)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports={getNameController}