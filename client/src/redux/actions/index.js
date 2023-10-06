import axios from "axios"

export const GET_GAMES = "GET_GAMES"
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_DETAIL = "GET_DETAIL"
export const POST_GAME = "POST_GAME"
export const GET_GENRES = "GET_GENRES"
export const GET_PLATFORMS = "GET_PLATFORMS"
//Filtos
export const FILTER_GENRE = "FILTER_GENRE"
export const FILTER_API = "FILTER_API"
export const ORDER = "ORDER"



export function getGames(){
    return async function(dispatch){
        let response = await axios(`http://localhost:3001/videogames`)
        return dispatch({
            type:"GET_GAMES",
            payload:response.data
        })
    }
}

export function getByName(name){
    return async function(dispatch){
        let response = await axios(`http://localhost:3001/videogames/name?name=${name}`)
        console.log(response.data)
        return dispatch({
            type:"GET_BY_NAME",
            payload:response.data
        })
    }
}

export function getDetail(id){
    return async function(dispatch){
        let response = await axios(`http://localhost:3001/videogames/${id}`)
        console.log(response.data)
        return dispatch({
            type:"GET_DETAIL",
            payload:response.data
        })
    }
}

export function postGame(game){
    const endpoint = "http://localhost:3001/videogames"
    return async (dispatch) =>{
        try {
            const {data} = await axios.post(endpoint, game)
            if(data){
                return dispatch({
                    type:"POST_GAME",
                    payload:response.data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export function getGenres(){
    return async function(dispatch){
        try {
            const response = await axios(`http://localhost:3001/genre`)
            return dispatch({
                type:GET_GENRES,
                payload:response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function getPlatforms(){
    return async function(dispatch){
        try {
            const response = await axios(`http://localhost:3001/platforms`)
            return dispatch({
                type:GET_PLATFORMS,
                payload:response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}



export function filterGenre(genres){
/*     return{
        type: FILTER_GENRE,
        payload: genres
    } */
    return async function(dispatch){
        try {
            dispatch({
                type: FILTER_GENRE,
                payload: genres
            })
        } catch (error) {
            console.log(error)
        }
    }
}



/* FILTER_API
export function filterApi(){
    return{
        type: FILTER_API,
        payload: 
    }
} */




export function order(order){
    return{
        type: ORDER,
        payload: order
    }
}
