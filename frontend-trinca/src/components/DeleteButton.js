import { CircularProgress, Button, Box } from "@chakra-ui/react"
import {BiTrash} from "react-icons/bi"

export const DeleteButton = ({loading, action  }) => {
    return (
        <Box>
            {loading ?
                <CircularProgress isIndeterminate color={"brand.400"} size="30px" />
                :
                <Button
                    h={"30px"}           
                    bg={"brand.600"}
                    borderRadius={"25px"}
                    onClick={action}>
                    <BiTrash size={"1.1em"} color="grey"/>
                </Button>
            }
        </Box>
    )
}