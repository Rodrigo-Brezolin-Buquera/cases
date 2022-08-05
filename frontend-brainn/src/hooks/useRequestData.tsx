import axios from "axios";
import { useState } from "react";
import { BaseURL } from "../constants/BaseURL";
import { RequestDataProps } from "../types/types";


export const useRequestData = ({initialData, url}: RequestDataProps): any[]  => {
    const [data, setData] = useState(initialData)
    const finalURL = `${BaseURL}${url}`
   
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
};