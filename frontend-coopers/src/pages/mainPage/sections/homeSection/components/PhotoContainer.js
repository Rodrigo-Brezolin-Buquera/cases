import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Triangle from "../../../../../assets/Triangle.png"
import Photo1 from "../../../../../assets/Photo1.png"

export const PhotoContainer = () => {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            h={"50%"}
            maxH={"70%"}
            position={"relative"}

        >
            <Image maxH={"500px"} src={Triangle} objectFit={"fill"} />
            <Image maxH={"400px"} src={Photo1} position="absolute" />

        </Box>


    )
}