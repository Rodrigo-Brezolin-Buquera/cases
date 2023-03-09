import { Box, CircularProgress } from "@chakra-ui/react"

export const LoadingCard = () => {
    return (
        <Box
        w={"300px"}
        margin={"1em"}
        h={"200px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
    >
        <CircularProgress isIndeterminate={true} color={"brand.100"} size="100px" />
    </Box>
    )
}