import { GET_GAMES, GET_BY_NAME, GET_DETAIL, GET_GENRES, GET_PLATFORMS, FILTER_GENRE, ORDER, FILTER_DB, CLEAN_FILTER, LOADING } from "../actions"

let initialState={
    allGame:[],
    gameCopy: [],
    detailgame: {},
    genres: [],
    platforms: [],
    loading: false,
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_GAMES:
            return{
                ...state,
                allGame:action.payload,
                gameCopy:action.payload,
                loading: false,
            }
        case GET_BY_NAME:
            return{
                ...state,
                allGame:action.payload,
            }
        case GET_DETAIL:
            return{
                ...state,
                detailgame: action.payload,
                loading: false,
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
                    if (game.genres && Array.isArray(game.genres)) {
                    const genreName = game.genres.map(genre => genre.name);
                    return genreName.includes(action.payload);
                    }
                    return false; // Si no hay géneros o no es un array, no se incluye en el filtro
                });
                return {
                    ...state,
                    allGame: [...filterGame] // Sobrescribe allGame con los juegos filtrados
                };
                }
            
            
        case ORDER:
            let orderCopy = [...state.allGame];
            
            if (action.payload === "ascendentRating") {
                orderCopy.sort((a, b) => (a.rating > b.rating ? 1 : -1));
            } else if (action.payload === "descendentRating") {
                orderCopy.sort((a, b) => (b.rating > a.rating ? 1 : -1));
            } else if (action.payload === "ascendentName") {
                orderCopy.sort((a, b) => a.name.localeCompare(b.name));
            } else if (action.payload === "descendentName") {
                orderCopy.sort((a, b) => b.name.localeCompare(a.name));
            }
        
            return {
                ...state,
                allGame: orderCopy
            };
                
        case CLEAN_FILTER:
            return{
                ...state,
                allGame: state.gameCopy
            }
        case FILTER_DB: 
            if (action.payload === "DB") {
                const gameCreated = state.gameCopy.filter(game => {
                    return game.created === true;
                });
                return {
                    ...state,
                    allGame: gameCreated
                };
            } else if(action.payload === "API"){
                const gameCreated = state.gameCopy.filter(game => {
                    return game.created === false;
                });
                return {
                    ...state,
                    allGame: gameCreated
                };
            } else {
                return {
                    ...state,
                    allGame: state.gameCopy
                }
                }
        case LOADING:
            return{
                ...state,
                loading:true
            }
        
        default:
            return state
    }
}


export default rootReducer