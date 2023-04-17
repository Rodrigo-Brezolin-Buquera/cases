import axios from "axios";
import { toModelCharacter } from "./model";


const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
});

export default api;

export const getCharacters = async (query = "?page=1")=> {
    const res = await api.get(`/character${query}`) 
    const modeledList = res.data.results.map(i=>toModelCharacter(i) )
    const result = {
        info: {
            next: res.data.info.next,
            prev: res.data.info.prev
        },
        list: modeledList
    }
    return result
};

export const getCharacterDetail = async (id)=> {
    const res = await api.get(`/character/${id}`)
    return toModelCharacter(res.data)
}



