const regexUrl = /\.(jpeg|jpg|gif|png)/i;
/* const regexUrl = /\bhttps?:\/\/\S+\.(png|jpe?g|gif|bmp|webp)\b/i */

const regexDate = /^(0?[1-9]|[12][0-9]|3[01])[-./](0?[1-9]|1[0-2])[-./]\d{4}$/;


/* export function formValidation(game){
    let errors = {}
    
    if(game.name.length < 3 || game.name.length >= 20){
        errors.name= "El name no puede superar los 20 caracteres"
    }
    if(regexUrl.test(game.image)){
        errors.image= "Ingresa una url valida"
    }
    if(!game.platform){
        errors.platform= "Elige una plataforma"
    }
    if(game.description.length >= 100){
        errors.description= "La descripcion no puede superar los 100 caracteres"
    }
    if(!regexDate.test(game.releaseDate)){
        errors.releaseDate= "Ingresa una fecha valida"
    }
    if(isNaN(game.rating)){
        errors.rating= "El rating solamente permite Numeros"
    }
    if(game.genres === 0){
        errors.genres= "Elige un Genero"
    }
    return errors
} */


export function formValidation(game){
    let errors = {}
    
    if(game.name.length < 3 || game.name.length >= 50){
        errors.name= "El name no puede superar los 20 caracteres"
    }
    if(!regexUrl.test(game.image)){
        errors.image= "Ingresa una url valida"
    }
    if(game.platform.length < 1){
        errors.platform= "Elige una plataforma"
    }
    if(game.description.length < 5 || game.description.length >= 100){
        errors.description= "La descripcion no puede superar los 100 caracteres"
    }
    if(!regexDate.test(game.releaseDate)/* !game.releaseDate */){
        errors.releaseDate= "Ingresa una fecha valida"
    }
    if(isNaN(game.rating)){
        errors.rating= "El rating solamente permite Numeros"
    }
    if(game.genres.length < 1){
        errors.genres= "Elige un Genero"
    }
    return errors
}


