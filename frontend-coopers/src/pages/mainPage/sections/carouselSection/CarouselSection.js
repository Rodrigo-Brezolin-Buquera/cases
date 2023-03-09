import { Box, Heading } from "@chakra-ui/react";
import { ImageCarousel } from "./components/ImageCarousel";


export const CarouselSection = () => {
    return (
        <Box
            w={"100%"}
            h={"700px"}
            position={"relative"}
        >
            <Box
                borderRadius={"10px"}
                backgroundColor={"brand.100"}
                w={"80%"}
                h={"500px"}
                position={"absolute"}
                left={"5%"}

            >
                <Heading position={"absolute"}
                    color={"white"}
                    size={"xl"}
                    top={"70px"}
                    left={["24px","64px","128px"]}
                    fontFamily={"primary"}
                    fontWeight={"black"}
                >good things
                </Heading>
                <Box position={"absolute"} left={["10px","40px","120px" ]} top={"150px"} w={'100%'}>
                    <ImageCarousel />
                </Box>

            </Box>


        </Box>
    )
}