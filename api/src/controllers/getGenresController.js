const axios = require("axios");
const { Genres } = require("../db");
require('dotenv').config();
const { API_KEY } = process.env;

const getGenresController = async (req, res) => {
    try {
        const response = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const genresData = response.data.results;


        for(const genreData of genresData){
            await Genres.findOrCreate({
                where: {id: genreData.id, name: genreData.name}
            })
        }

        return res.status(200).json({genresData});
    } catch (error) {
        console.error("Error al obtener y guardar los géneros:", error);
        return res.status(500).json({ error: "Error al obtener y guardar los géneros" });
    }
}

module.exports = { getGenresController };
