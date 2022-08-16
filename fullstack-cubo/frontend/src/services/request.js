import axios from "axios"
import { baseURL } from "../constants/baseURL"

export const addData = (body) => {
    axios.post(`${baseURL}/data`, body)
    .then(res => console.log("data adicionada"))
    .catch(err => console.log(err.response))
}