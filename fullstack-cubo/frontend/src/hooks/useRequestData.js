import axios from "axios";
import { useState } from "react";
import { baseURL } from "../constants/baseURL";


export const useRequestData = (initialData, url )  => {
    const [data, setData] = useState(initialData)
    const finalURL = `${baseURL}${url}`
   console.log(finalURL)
    const getRequest = () => {
        axios.get(finalURL)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err.response)
                alert('Ocorreu um erro, tente novamente')
            })
    }
    return [data, getRequest]
}