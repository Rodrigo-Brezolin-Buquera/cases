import { Box, Text } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <footer>
            <Box
                w={"100%"}
                h={"240px"}
                bg={"brand.300"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                mt={"2em"}
                clipPath={"polygon(0 10%, 100% 0, 100% 100%, 0 100%)"}
                gap={"0.3em"}
            >
                <Text
                    fontFamily={"primary"}
                    fontSize={"2xl"}
                    fontWeight={"bold"}
                    color={"brand.400"}
                >
                    Need help?
                </Text>
                <Text
                    fontFamily={"primary"}
                    fontSize={"xl"}
                    fontWeight={"bold"}
                    color={"brand.400"}
                >
                    coopers@coopers.pro
                </Text>
                <Text
                    fontFamily={"primary"}
                    fontSize={"small"}
                    color={"brand.400"}
                >
                    © 2021 Coopers. All rights reserved.
                </Text>
                <Box
                    h={"30px"}
                    w={"30%"} fontFamily={"primary"}
                    background={"brand.100"}
                    position={"absolute"}
                    bottom={"0"}
                    clipPath={"polygon(0 10%, 100% 0, 100% 100%, 0 100%)"}
                />
            </Box>
        </footer>)
}