import { Box, Heading, Text } from "@chakra-ui/react"
import { FoodBanner } from "../../components/FoodBanner"
import { GoBackButton } from "../../components/GoBackButton"
import { LogoImage } from "../../components/LogoImage"


const ErrorPage = () => {


    return (
        <Box
            w={"100%"}
            h={"100%"}
            minH={"100vh"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"brand.400"}
        >
            <FoodBanner />
            <Box w={"100%"} display={"flex"} justifyContent={"end"} >
                <GoBackButton />
            </Box>


            <Box
                bg={"brand.400"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                mt={"20em"}
               gap={"2em"}
            >
                <Heading>Erro: 404 </Heading>

                <Text fontSize={"xl"} textAlign={"center"}>Caraca, me deram o endereço errado! Essa festa não tem ninguém!! </Text>
            </Box>
            <LogoImage />
        </Box>
    )
}

export default ErrorPage
