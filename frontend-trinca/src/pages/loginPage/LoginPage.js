import { Box } from "@chakra-ui/react"
import { AppNameHeading } from "../../components/AppNameHeading"
import { FoodBanner } from "../../components/FoodBanner"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { LoginForm } from "./components/LoginForm"
import {LogoImage} from "../../components/LogoImage"

const LoginPage = () => {
    useUnprotectedPage()

    return (
        <Box
            w={"100%"}
            h={"100%"}
            minH={"100vh"}
            display={"flex"}    
            flexDirection={"column"}       
            justifyContent={"space-around"}
            alignItems={"center"}
            gap={"4em"}
            backgroundColor={"brand.100"}

            > 
            <FoodBanner/>
            <AppNameHeading/>    
            <LoginForm />
            <LogoImage/>
        </Box>
    )
}

export default LoginPage
