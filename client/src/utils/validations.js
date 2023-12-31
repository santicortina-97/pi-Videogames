const regexUrl = /\.(jpeg|jpg|gif|png)/i;

const regexDate = /^(0?[1-9]|[12][0-9]|3[01])[-./](0?[1-9]|1[0-2])[-./]\d{4}$/;




export function formValidation(game){
    let errors = {}
    
    if(game.name.length < 3 || game.name.length >= 50){
        errors.name= "Name between 3 and 50 characters"
    }
    if(!regexUrl.test(game.image)){
        errors.image= "Enter a valid url"
    }
    if(game.platform.length < 1){
        errors.platform= "Choose a platform"
    }
    if(game.description.length < 5 || game.description.length >= 100){
        errors.description= "Cannot exceed 100 characters"
    }
    if(!regexDate.test(game.releaseDate)){
        errors.releaseDate= "Enter a valid date"
    }
    if(isNaN(game.rating) || game.rating < 0 || game.rating > 5){
        errors.rating= "Rating from 0 to 5"
    }
    if(game.genres.length < 1){
        errors.genres= "Choose a Genre"
    }
    return errors
}

