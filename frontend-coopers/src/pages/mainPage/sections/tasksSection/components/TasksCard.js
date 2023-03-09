import { Card, CardHeader, Heading, CardBody, Text, Box } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { EraseAllButton } from "./EraseAllButton"
import { deleteTaskByStatus } from "../../../../../services/requests/crud"

export const TasksCard = (props) => {
    const [cardLoading, setCardLoading] = useState(false)

    const eraseAllTasks = async () => {
        const status = props.cardName === "Done" ? true : false
        props.setLoading(true)
        await deleteTaskByStatus(props.userId, status, setCardLoading)
        props.setLoading(false)
    }

    useEffect(() => { }, [cardLoading])

    return (
        <Card
            w={"380px"}
            minH={"500px"}
            alignItems={"center"}
            bg={"brand.400"}
            m={"0.5em"}
        >
            <Box
                w={"100%"}
                h={"1em"}
                background={props.cardName === "Done" ? "brand.100" : "brand.500"}
            />

            <CardHeader>
                <Heading size='xl' fontFamily={"secondary"}>{props.cardName}</Heading>
            </CardHeader>

            <CardBody
                w={"100%"}
                display={"flex"}
                flexDirection={"column"}
                gap={"2em"}
                justifyContent={"align-self"}
                pt={"0"}
            >

                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                >
                    <Text fontSize='xl' fontFamily={"primary"} >
                        {props.firstLine}
                    </Text>
                    <Text
                        fontSize='xl' fontFamily={"primary"}
                        fontWeight={props.cardName === "Done" ? "bold" : "normal"}
                    >
                        {props.secondLine}
                    </Text>
                </Box>
                <Box minH={"300px"} >
                    {props.children}
                </Box>

                <EraseAllButton
                    loading={cardLoading}
                    action={eraseAllTasks}
                />

            </CardBody>
        </Card>)
}