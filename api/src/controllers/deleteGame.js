const {Videogame} = require("../db")

const deleteGame = async (req, res)  =>{
    try {
        const {id} = req.params;
        await Videogame.destroy({where:{id: id}})

        const games = await Videogame.findAll()

        return res.status(200).json(games)
    } catch (error) {
        return res.statys(500).json(error.message)
    }
}

module.exports={deleteGame}