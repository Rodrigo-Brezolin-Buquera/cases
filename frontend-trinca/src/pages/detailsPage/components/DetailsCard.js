import { Box, Card, CardBody, Button, Heading, Text } from "@chakra-ui/react"
import { ContributionValue } from "../../../components/ContributionValue"
import { DeleteButton } from "../../../components/DeleteButton"
import { ParticipantsQuantity } from "../../../components/ParticipantsQuantity"
import { formatDate } from "../../../services/dates/formatDate"
import { sumContributions } from "../../../utils/sumContributions"
import { ParticipantLine } from "./ParticipantLine"
import { deleteEvent } from "../../../services/requests/deleteEvent"
import { useNavigate } from "react-router-dom"
import { LoadingCard } from "../../../components/LoadingCard"
import { useState } from "react"

export const DetailsCard = ({ details, onOpen, id, setRefreshPage,refreshPage }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
   
    const deleteThisEvent = async () => {
        if (window.confirm("Excluir este evento?")) {
            await deleteEvent(id, navigate, setLoading)
        }
    }

    const participantsList = details?.participants.length &&
        details.participants.map((participant) => {
            return <ParticipantLine
                key={participant.id}
                participantId={participant.id}
                eventId={id}
                name={participant.name}
                contribution={participant.contribution}
                paid={participant.paid}
                participantsList={details?.participants}  
                setRefreshPage={setRefreshPage}  
                refreshPage={refreshPage}    
            />
        })

    return (
        <Card  w={"350px"} margin={"1em"}>
            {details ?
                <CardBody>
                    <Box display={"flex"}>
                        <Box flexGrow={"1"} maxW={"70%"}>
                            <Text fontWeight={"bold"}>{formatDate(details?.date)}</Text>
                            <Heading pt='2' fontSize='2xl' > {details?.description}</Heading>
                            <Text pt='2'>{details?.observation}</Text>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} alignItems={"start"}>
                            <ParticipantsQuantity
                                totalParticipants={details?.participants.length}
                            />
                            <ContributionValue
                                totalValue={sumContributions(details?.participants)}
                            />
                        </Box>
                    </Box>

                    <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} m={"1em"}>
                        <Button bg={"gold"} onClick={onOpen}>Adicionar pessoas</Button>
                        <DeleteButton loading={loading} action={deleteThisEvent} />
                    </Box>

                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                    >
                        {
                            participantsList?.length ?
                                participantsList
                                :
                                <Text
                                    textAlign={"center"}
                                >
                                    Não fiquei sozinho(a) nessa festa! Convide alguém!
                                </Text>
                        }
                    </Box>

                </CardBody>
                :
               <LoadingCard/>
            }
        </Card>
    )
}


