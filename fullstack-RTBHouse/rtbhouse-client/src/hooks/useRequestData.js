import { useState, useEffect } from "react"
import { api } from "../api"

export const useRequestData = (path, initialState) => {
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)

    const fakeLoading = async () => { 
        // loading time simulation
        await new Promise(resolve => setTimeout(resolve, 700))
    }

    const apiCall = async () => {
        try {
            setLoading(true)
            await fakeLoading()
            const response = await api.get(path)
            setData(response.data.result)
        } catch (error) {
            console.log(error.response.data)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        apiCall()
    }, [path])

    return [data, loading]
}