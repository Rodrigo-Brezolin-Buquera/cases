import { Box, Text } from "@chakra-ui/react"
import { BsPeople } from "react-icons/bs"

export const ParticipantsQuantity = ({totalParticipants}) => {
    return (
        <Box display={"flex"} alignItems={"center"} gap={"0.3em"}>
            <BsPeople color="gold" size={"1.5em"} />
            <Text pt='2' fontSize='md' paddingBottom={"0.5em"}>
                {totalParticipants}
            </Text>
        </Box>
    )
}