const axios = require("axios");
const {API_KEY} = process.env


const getPlatformsController = async (req, res) =>{
    try {
        let page = 1;
        const platforms= [];
        
        while(page <= 3) {
            const response = await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`);
            const games = response.data.results;

            games.forEach((game) => {
                game.platforms.forEach((platform) =>{
                    const platformName = platform.platform.name;
                    if(!platforms.includes(platformName)){
                        platforms.push(platformName);
                    }
                });
            });
            page++
        }
        res.status(200).json({platforms})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports={getPlatformsController}
