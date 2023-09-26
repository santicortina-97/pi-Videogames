const axios = require("axios");
const {API_KEY} = process.env
/* console.log(API_KEY) */

const getNameController = async (req, res) =>{
    try {
        const {name} = req.query;
        const {data} = await axios(`https://api.rawg.io/api/games?search=${name}?api_key=${API_KEY}`)
        if(data.results && data.results.length > 0){
            const firstResult = data.results[0];
            const videogame = {
                id: firstResult.id,
                name: firstResult.name,
                description: firstResult.description
            };
            return res.status(200).json(videogame)
        }else{
            const dbVideogame = await findOne({where:{name}})
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
        
/* 
            await findOne({where:{name}})

         */
    } catch (error) {
        return res.status(500).send(error.message)
    }

}

module.exports={getNameController}