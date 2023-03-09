import { Box, Checkbox, Divider, Text } from "@chakra-ui/react"
import { useState } from "react"
import { DeleteButton } from "../../../components/DeleteButton"
import { changePaidStatus } from "../../../services/requests/changePaidStatus"
import { updateParticipants } from "../../../services/requests/updateParticipants"
import { formatContribution } from "../../../utils/formatContribution"

export const ParticipantLine = (
    { eventId, participantId, name, contribution, paid, participantsList, setRefreshPage,refreshPage }
) => {
    const [buttonloading, setButtonLoading] = useState(false)

    const changePaymentStatus = () => {
        const list = [...participantsList]
        const index = list?.length && list.findIndex((i) => i.id === participantId)
        list[index].paid = !paid
        return list
    }

    const removeParticipantFromList = () => {
        return participantsList?.length && participantsList.filter(i => i.id !== participantId)
    }

    const changeStatus = async () => {   
        const list = changePaymentStatus()
        await changePaidStatus(eventId, list, setRefreshPage, refreshPage )    
    }

    const deleteParticipant = async() => {
        setButtonLoading(true)
        const filteredList = removeParticipantFromList()
        await updateParticipants(eventId, filteredList, setRefreshPage )
        setButtonLoading(false)
    }

    return (
        <>
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                h={"50px"}
            >
                <Box
                    display={"flex"}
                    gap={"0.5em"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    onClick={changeStatus}
                >
                    <Checkbox
                        colorScheme={"yellow"}
                        isChecked={paid}
                        onClick={changeStatus}
                    />
                    <Text onClick={changeStatus} fontWeight={"bold"} pb={"0.2em"}>{name}</Text>
                </Box>

                <Box display={"flex"} gap={"0.5em"} justifyContent={"end"} alignItems={"center"}>
                    {paid ?
                        <Text as={"s"}>{formatContribution(contribution, 2)}</Text>
                        :
                        <Text>{formatContribution(contribution, 2)}</Text>
                    }
                    <DeleteButton action={deleteParticipant} loading={buttonloading} color={"none"} />
                </Box>
            </Box>
            <Divider />
        </>
    )
}


