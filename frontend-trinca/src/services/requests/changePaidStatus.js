import { updateDoc, doc } from "firebase/firestore/lite"
import { eventsCollection } from "./config"

export const changePaidStatus = async (eventId, participantsList, setRefreshPage, refreshPage ) => {
    try {
        const eventDoc = doc(eventsCollection, eventId)

        await updateDoc(eventDoc, {
            participants: participantsList
        })
        
        setRefreshPage(!refreshPage)
    } catch (err) {
        console.log(err)
    }
}