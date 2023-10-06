import { GET_GAMES, GET_BY_NAME, GET_DETAIL, GET_GENRES, GET_PLATFORMS, FILTER_GENRE, ORDER } from "../actions"

let initialState={
    allGame:[],
    gameCopy: [],
    detailgame: {},
    genres: [],
    platforms: [],
    filterGenre: [],
}

function rootReducer(state = initialState, action){
    let order;
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
            case FILTER_GENRE:
                if (action.payload === "All") {
                return {
                    ...state,
                    allGame: state.gameCopy // Restaura la lista original de juegos sin filtrar
                };
                } else {
                const filterGame = state.gameCopy.filter(game => {
                    const genreName = game.genres.map(genre => genre.name);
                    return genreName.includes(action.payload);
                });
                return {
                    ...state,
                    allGame: filterGame // Sobrescribe allGame con los juegos filtrados
                };
                }
            
        case ORDER:
            if(action.payload === "ascendentRating"){
                order= state.allGame.sort((a,b) => (a.rating > b.rating  ? 1 : -1))
            }else if(action.payload === "descendentRating"){
                order= state.allGame.sort((a,b) => (b.rating > a.rating  ? 1 : -1))
            }else if(action.payload === "ascendentName"){
                order = state.allGame.sort((a, b) => a.name.localeCompare(b.name))
            }else if(action.payload === "descendentName"){
                order = state.allGame.sort((a, b) => b.name.localeCompare(a.name))
            }
            
            return{
                ...state,
                allGame:[...order]
            }
        default:
            return state
    }
}


export default rootReducer