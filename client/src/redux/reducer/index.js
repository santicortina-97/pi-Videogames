import { GET_GAMES, GET_BY_NAME, GET_BY_ID } from "../actions"

let initialState={
    allGame:[],
    gameCopy: []
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
        case GET_BY_ID:
            return{
                ...state,
                allGame:action.payload,
                gameCopy:action.payload
            }
        default:
            return state
    }
}

export default rootReducer