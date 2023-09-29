import axios from "axios"

export const GET_GAMES = "GET_GAMES"
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_DETAIL = "GET_DETAIL"

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
/*         console.log(response.data) */
        return dispatch({
            type:"GET_BY_NAME",
            payload:response.data
        })
    }
}

export function getDetail(id){
    return async function(dispatch){
        let response = await axios(`http://localhost:3001/videogames/${id}`)
        /* console.log(response.data) */
        return dispatch({
            type:"GET_DETAIL",
            payload:response.data
        })
    }
}
