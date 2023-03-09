import { Img } from "@chakra-ui/react"
import Logo from "../assets/Logo.png"

export const LogoImage = () => {
    return (
        <Img
            w={"150px"}
            h={"70px"}
            objectFit={"cover"}
            src={Logo}
            alt={"logo"}
        />
    )
}