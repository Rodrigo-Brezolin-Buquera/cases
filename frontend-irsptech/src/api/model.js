import { idGenerator } from "../utils/idGenerator"
import { pictureGenerator } from "../utils/pictureGenerator"

export const toModelUser = (obj) =>{

    return {
        id: obj.login.uuid,
        name: `${obj.name.first} ${obj.name.last}`, 
        email:obj.email,
        gender: obj.gender === "male" ? "masculino" : "feminino" ,
        phone: obj.phone,
        picture: obj.picture.large,
        country: obj.location.country,
        state: obj.location.state,
        city: obj.location.city
    }
}


export const toModelNewUser = (obj) =>{

    return {
        ...obj,
        id: idGenerator(),
        picture: pictureGenerator()

    }
}