import { Card, CardBody, Heading, Box, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../../routes/coordinator"
import { ContributionValue } from "../../../components/ContributionValue"
import { ParticipantsQuantity } from "../../../components/ParticipantsQuantity"

export const EventCard = (
    { id, date, description, observation, totalParticipants, totalValue }
) => {
    const navigate = useNavigate()

    return (
        <Card
            w={"300px"}
            h={"200px"}
            onClick={() => goToDetailsPage(navigate, id)}
            margin={"0.5em"}
        >
            <CardBody h={"100%"}>
                    <Box  h={"120px"}>
                        <Heading size='sm'>{date}</Heading>
                        <Text pt='2' fontSize='md' fontWeight={"bold"}>
                            {description}
                        </Text>
                        <Text pt='2' fontSize='md'>
                            {observation}
                        </Text>
                    </Box>
            
                <Box 
                    display={"flex"}
                    justifyContent={"space-between"}
                >
                    <ParticipantsQuantity totalParticipants={totalParticipants} />

                    <ContributionValue totalValue={totalValue} />
                </Box>

            </CardBody>
        </Card>
    )
}


