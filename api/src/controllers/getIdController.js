const axios = require("axios")
/* const URL= "https://api.rawg.io/api/games/" */
require('dotenv').config();
const {API_KEY} = process.env

const getIdController = async (req, res) =>{
    try {
        const {id} = req.params;
        /* const {data} = await axios(`${URL}/${id}?key=${API_KEY}`) */
        const {data} = await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        const videogame = {
            id: data.id,
            name: data.name,
            description: data.description
        };
        console.log(videogame)
        if(data){
            return res.status(200).json(videogame)
        }

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports={getIdController}