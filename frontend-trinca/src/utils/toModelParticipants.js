import { generateId } from "../services/idGenerator/generateId"

export const toModelParticipants = ({ foodContribution, drinksContribution }, participantsList) => {
   return participantsList?.map((participant) => {
        const sumValues = () => {
            return (
                (participant.food ? foodContribution : 0)
                +
                (participant.drinks ? drinksContribution : 0)
            )
        }

        return (
            {
                id: generateId(),
                name: participant.name,
                contribution: sumValues(),
                paid: false
            }
        )
    })
}