import { getDocs } from "firebase/firestore/lite"
import { eventsCollection } from "./config"

export const getAllEvents = async (setEvents) => {
    try {
        const res = await getDocs(eventsCollection)
        const eventsList = res.docs.map((doc) => { return { ...doc.data(), id: doc.id } })
        setEvents(eventsList)
    } catch (err) {
        console.log(err)
        alert("Erro ao acessar eventos, tente novamente")
    }

}