import { Img } from "@chakra-ui/react"
import Logo from "../assets/Logo.png"

export const LogoImage = () => {
    return (
        <Img
             w={"100px"}
            src={Logo}
        />
    )
}