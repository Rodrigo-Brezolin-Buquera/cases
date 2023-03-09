import { doc, getDoc } from "firebase/firestore/lite"
import { eventsCollection } from "./config"

export const getEventById = async (id, setDetails) => {
    try {
        const eventDoc = doc(eventsCollection, id)
        const res = await getDoc(eventDoc)
        setDetails(res.data())
        
    } catch (err) {
        console.log(err)
        alert("Erro ao acessar o evento, tente novamente")
    }

}