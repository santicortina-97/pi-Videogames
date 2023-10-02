import { GET_GAMES, GET_BY_NAME, GET_DETAIL, GET_GENRES, GET_PLATFORMS } from "../actions"

let initialState={
    allGame:[],
    gameCopy: [],
    detailgame: {},
    genres: [],
    platforms: [],
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_GAMES:
            return{
                ...state,
                allGame:action.payload,
                gameCopy:action.payload
            }
        case GET_BY_NAME:
            return{
                ...state,
                allGame:action.payload,
                gameCopy:action.payload
            }
        case GET_DETAIL:
            return{
                ...state,
                detailgame: action.payload,
            }
        case GET_GENRES:
            return{
                ...state,
                genres: action.payload,
            }
        case GET_PLATFORMS:
            return{
                ...state,
                platforms: action.payload,
            }
        default:
            return state
    }
}


export default rootReducer