import { Card, CardBody, Heading, Box, Circle, useDisclosure } from "@chakra-ui/react"
import { AddEventModal } from "./AddEventModal"
import { GiBarbecue } from "react-icons/gi"


export const AddEventCard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Card w={"300px"} h={"200px"} onClick={onOpen} margin={"0.5em"} background={"brand.600"} >
                <CardBody>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={"0.3em"}
                        paddingTop={"1em"}
                    >
                        <Circle bg={"brand.100"} size={"6em"} paddingLeft={"0.2em"} >
                            <GiBarbecue size="3.5em" color={"grey"} />
                        </Circle>
                        <Heading size='sm' fontWeight={"bold"} >
                            Adicionar Churras
                        </Heading>
                    </Box>
                </CardBody>
            </Card>

            <AddEventModal isOpen={isOpen} onClose={onClose}  />
        </>
    )
}


