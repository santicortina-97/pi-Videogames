const axios = require("axios");
const {API_KEY} = process.env


const getVideogamesController = async (req, res) =>{
            const URL = "https://api.rawg.io/api/games";
            const maxPages= 5;
            const videogames = [];
            try {
                for(let page = 1; page <= maxPages; page++){
                        const {data} = await axios(`${URL}?key=${API_KEY}&page=${page}`);
                        if(data.results){
                            videogames.push(
                                ...data.results.map((game)=>({
                                id: game.id,
                                name: game.name,
                                description: game.description
                            }))
                            );
                        };
                    }
                return res.status(200).json(videogames)
            } catch (error) {
                return res.status(500).json(error.message)
            }
}

module.exports={getVideogamesController}