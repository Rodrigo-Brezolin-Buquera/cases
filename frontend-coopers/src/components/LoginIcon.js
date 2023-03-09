import { Img } from "@chakra-ui/react"
import LoginImage from "../assets/LoginImage.png"

export const LoginIcon = () => {
    return (
        <Img
            w="150px"
            h={"150px"}
            src={LoginImage}
            alt={"login icon"}
        />
    )
}