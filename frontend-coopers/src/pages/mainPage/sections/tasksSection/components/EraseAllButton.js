import { CircularProgress, Button, Box, Text } from "@chakra-ui/react"

export const EraseAllButton = ({ loading, action }) => {
    return (
        <Box w={"100%"} display={"flex"} justifyContent={"center"} >
            {loading ?
                <CircularProgress isIndeterminate color={"black"} size="30px" />
                :
                <Button
                    h={"64px"}
                    w={"300px"}
                    bg={"black"}
                    borderRadius={"10px"}
                    onClick={action}
                    mb={"1em"}
                >
                    <Text
                        color={"white"}
                        fontSize={"xl"} letterSpacing={"wide"}
                        fontFamily={"primary"}
                    >
                        erase all
                    </Text>
                </Button>
            }
        </Box>

    )
}