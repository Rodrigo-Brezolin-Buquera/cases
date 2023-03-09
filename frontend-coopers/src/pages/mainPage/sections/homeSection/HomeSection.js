import React from "react";
import { Box } from "@chakra-ui/react";
import { PhotoContainer } from "./components/PhotoContainer";
import { TextContainer } from "./components/TextContainer";

export const HomeSection = () => {
    return (
        <section>
            <Box
                w={"100%"}
                h={"100%"}
                display={"flex"}
                flexDirection={["column", "column", "row"]}
                justifyContent={"space-between"}
                bg={"brand.400"}
                position={"relative"}
            >
                <TextContainer />
                <PhotoContainer />

            </Box>
            
        </section>

    )
}