import { updateDoc, doc } from "firebase/firestore/lite"
import { eventsCollection } from "./config"

export const updateParticipants = async (eventId, participantsList, setLoading ) => {
    try {
         setLoading(true)
        const eventDoc = doc(eventsCollection, eventId)

        await updateDoc(eventDoc, {
            participants: participantsList
        })
        
        setLoading(false)
    } catch (err) {
        setLoading(false)
        console.log(err)
        alert("Erro ao modificar participantes, tente novamente")
    }
}