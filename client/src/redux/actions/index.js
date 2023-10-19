import axios from "axios"

export const GET_GAMES = "GET_GAMES"
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_DETAIL = "GET_DETAIL"
export const POST_GAME = "POST_GAME"
export const DELETE_GAME = "DELETE_GAME"
export const GET_GENRES = "GET_GENRES"
export const GET_PLATFORMS = "GET_PLATFORMS"
export const PAGINATE = "PAGINATE"
//Filtos
export const FILTER_GENRE = "FILTER_GENRE"
export const FILTER_DB = "FILTER_DB"
export const ORDER = "ORDER"
export const CLEAN_FILTER = "CLEAN_FILTER"
//Loading
export const LOADING = "LOADING"



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
        try {
            let response = await axios(`http://localhost:3001/videogames/name?name=${name}`)
            return dispatch({
                type:"GET_BY_NAME",
                payload:response.data
            })
        } catch (error) {
            alert("No existe")
        }
    }
}

export function getDetail(id){
    return async function(dispatch){
        let response = await axios(`http://localhost:3001/videogames/${id}`)
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

export function deleteGame(id){
    const endpoint = "http://localhost:3001/delete/" + id
    return async function(dispatch){
        try {
            const {data} = await axios.delete(endpoint)
            if(data){
                return dispatch({
                    type: DELETE_GAME,
                    payload: data
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

/* FILTER_DB */
export function filterDb(payload){
    return { 
        type: FILTER_DB, 
        payload 
    };
}


export function order(order){
    return{
        type: ORDER,
        payload: order
    }
}

export function cleanFilter(){
    return async function(dispatch){
        try {
            dispatch({
                type: CLEAN_FILTER,
                payload: []
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function loading(){
    return{
        type: LOADING,
    }
}

