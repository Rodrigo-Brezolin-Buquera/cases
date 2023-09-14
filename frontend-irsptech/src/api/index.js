import axios from "axios";
import { toModelUser } from "./model";


const api = axios.create({
    baseURL: "https://randomuser.me/api",
});

export default api;

export const getUsers = async ()=> {
    const res = await api.get(`/?results=20`) 
    return res.data.results.map(i=>toModelUser(i))
 
};

export const getUserDetails = async ()=> {
    const res = await api.get() 
    return toModelUser(res.data.results[0])
 
};

