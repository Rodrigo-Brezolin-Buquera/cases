import { Button } from "@chakra-ui/react"

import { RiArrowGoBackFill } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { goBack } from "../routes/coordinator"


export const GoBackButton = () => {
    const navigate = useNavigate()
    return (
        <Button
            margin={"0.5em"}
            bg={"brand.600"}
            borderRadius={"25px"}
            onClick={()=>goBack(navigate)}>
            <RiArrowGoBackFill size={"2em"} color="grey" />
        </Button>
    )
}