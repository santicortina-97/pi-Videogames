const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getGenresController} = require ("../controllers/getGenresController.js")
const {getIdController} = require ("../controllers/getIdController.js")
const {getNameController} = require ("../controllers/getNameController.js")
const {getVideogamesController} = require ("../controllers/getVideogamesCotroller.js")
const {postVideogamesController} = require ("../controllers/postVideogamesController.js")
const {getPlatformsController} = require ("../controllers/getPlatformController.js")
const {deleteGame} = require ("../controllers/deleteGame.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/videogames/name", getNameController)
router.get("/videogames/:id", getIdController)
router.get("/videogames", getVideogamesController)
router.post("/videogames", postVideogamesController)
router.get("/genre", getGenresController)
router.get("/platforms", getPlatformsController)
router.delete("/delete/:id", deleteGame)


module.exports = router;
