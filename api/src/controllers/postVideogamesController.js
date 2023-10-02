const {Videogame, Genres} = require("../db")

const postVideogamesController = async (req, res) =>{
/*     try {
        const {id, name, description, platform, image, releaseDate, rating, genres} = req.body;
        //Buscamos el game
        const existGame = await Videogame.findOne({where: {name}})
        //Si existe damos el error
        if(existGame){
            return res.status(400).json({error: "Ya existe un juego con ese nombre"})
        }
        //Creamos el nuevo game
        const newGame = await Videogame.create({id, name, description, platform, image, releaseDate, rating, genres})
        return res.status(200).json(newGame)
        
    } catch (error) {
        return res.status(500).json(error.message)
    } */

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
        res.status(500).json(error.message)
    }

//     const { name, releaseDate, description, platform, image, rating, genres } =
//     req.body;

//   try {
//     // Verifica si el juego ya existe
//     const findingGame = await Videogame.findOne({ where: { name: name } });
//     if (findingGame) {
//       return res.status(400).json({
//         error: "This game already exists. Try again using another name.",
//       });
//     }

//     // Crea un nuevo juego
//     const newGame = await Videogame.create({
//         name,
//         description,
//         platform,
//         image,
//         rating,
//         releaseDate,
//     });

//     // Asocia los géneros al juego
//     for (let i = 0; i < genres.length; i++) {
//       const genre = await Genres.findOne({
//         where: {
//           name: genres[i],
//         },
//       });
//       if (genre) {
//         await newGame.addGenres(genre.id);
//       }
//     }

//     // Busca el juego recién creado con sus géneros asociados
//     const returnCreatedGame = await Videogame.findOne({
//       where: { id: newGame.id },
//       include: [
//         {
//           model: Genres,
//           attributes: ["name"],
//           through: { attributes: [] },
//         },
//       ],
//     });

//     return res.status(200).json(returnCreatedGame);
//   } catch (error) {
//     return res.status(400).json({ error: error.message });
//   }
}

module.exports={postVideogamesController}