import React from "react";
import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";


export const TextContainer = () => {
    return (

        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"start"}
            gap={"0.5em"}
            p={"4em"}
            minW={"380px"}
        >
            <Heading
                fontFamily={"primary"}
                color={"brand.300"}
                size={"4xl"}
                fontWeight={"black"}

            >
                Organize
            </Heading>
            <Heading
                fontFamily={"primary"}
                color={"brand.100"}
            >
                your daily jobs

            </Heading>
            <Text

                mt={"1em"} mb={"1em"}
                color={"brand.300"}
                fontSize={"2xl"}
                letterSpacing={"wide"}
                fontFamily={"primary"}
            >
                The only way to get things done
            </Text>
            <Button bg={"brand.100"} w={"300px"} h={"64px"} >
                <Link
                    fontSize={"2xl"}
                    color={"brand.400"}
                    fontFamily={"primary"}
                    href="#tasks"
                >
                    Go to To-do list

                </Link>
            </Button>

        </Box>


    )
}