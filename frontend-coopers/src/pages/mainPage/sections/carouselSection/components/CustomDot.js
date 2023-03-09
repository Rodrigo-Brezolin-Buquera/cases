import { Button } from "@chakra-ui/react"

export const CustomDot = ({ active, onClick }) => {
    return (
    <Button
        borderRadius={"25px"}
        backgroundColor={active ? "brand.100" : "lightgrey"}
        size={'xs'}
        margin={"1em"}
        onClick={onClick}
    />
    )
}