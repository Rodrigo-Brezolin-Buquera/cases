import { Button } from "@chakra-ui/react"
import {RxExit} from "react-icons/rx"
import { logout } from "../services/requests/auth"

export const LogoutButton = () => {
    return (
                <Button   
                    margin={"0.5em"}      
                    bg={"brand.600"}
                    borderRadius={"25px"}
                    onClick={logout}>
                    <RxExit size={"2em"} color="grey"/>
                </Button>     
    )
}