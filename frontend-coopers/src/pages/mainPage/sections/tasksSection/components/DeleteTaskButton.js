import { CircularProgress, Button, Box, Text } from "@chakra-ui/react"
import { deleteTaskById } from "../../../../../services/requests/crud"
import { useState } from "react"

export const DeleteTaskButton = (props) => {
    const [loading, setLoading] = useState(false)

    const deleteTask = async() => {
        props.setLoading(true)
        await deleteTaskById(props.userId, props.taskId, setLoading)
        props.setLoading(false)
    }

    return (
        <Box>
            {loading ?
                <CircularProgress isIndeterminate color={"black"} size="30px" />
                :
                <Button
                    onClick={deleteTask}
                    borderRadius={"25px"}
                    variant='ghost'
                    h={"2em"}
                >
                    <Text>Delete</Text>
                </Button>
            }
        </Box>
    )
}