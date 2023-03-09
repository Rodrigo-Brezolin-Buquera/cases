import { Box, Text } from "@chakra-ui/react"
import { formatContribution } from "../utils/formatContribution"
import { RiMoneyDollarCircleFill } from "react-icons/ri"

export const ContributionValue = ({totalValue}) => {
    return (
        <Box display={"flex"} alignItems={"center"} gap={"0.3em"}>
            <RiMoneyDollarCircleFill color="gold" size={"1.5em"} />
            <Text pt='2' fontSize='md' paddingBottom={"0.5em"}>
                {formatContribution(totalValue, 0)}
            </Text>
        </Box>
    )
}