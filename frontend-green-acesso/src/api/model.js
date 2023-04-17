export const toModelCharacter = (char) => {
    return {
        id: char.id,
        name: char.name,
        gender:  char.gender ,
        species:  char.species ,
        status:  char.status ,
        image:  char.image ,
        type:  char.type ,
        location: char.location.name,
        origin: char.origin.name,
        favorite: false
    }
}