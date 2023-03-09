import { Img, Box } from "@chakra-ui/react"
import EmailIcon from "../assets/EmailIcon.png"

export const EmailImage = () => {
    return (
        <Box w={"50px"} h={"50px"} backgroundColor={"brand.100"} >
            <Img
                src={EmailIcon}
                alt={"email icon"}
            />
        </Box>

    )
}