import { doc, setDoc } from "firebase/firestore/lite"
import { goToDetailsPage } from "../../routes/coordinator"
import { eventsCollection } from "./config"

export const postEvent = async (form, setLoading, navigate) => {
    try {
        setLoading(true)
        const eventDoc = doc(eventsCollection)
        const event = {
            date: form.date,
            description: form.description,
            observation: form.observation,
            drinksContribution: Number(form.drinksContribution),
            foodContribution: Number(form.foodContribution),
            participants: []
        }

        await setDoc(eventDoc, event)
        goToDetailsPage(navigate, eventDoc.id)
    } catch (err) {
        setLoading(false)
        console.log(err)
        alert("Erro ao criar evento, tente novamente")
    }

}