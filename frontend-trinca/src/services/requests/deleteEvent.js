import { doc, deleteDoc } from "firebase/firestore/lite"
import { goToMainPage } from "../../routes/coordinator"
import { eventsCollection } from "./config"

export const deleteEvent = async (id, navigate, setLoading) => { 
    try {
        setLoading(true)
        const eventDoc = doc(eventsCollection, id)
    
        await deleteDoc(eventDoc)
        goToMainPage(navigate)
    } catch (err) {
        setLoading(false)
        console.log(err)
        alert("Erro ao deletar evento, tente novamente")
    }

}