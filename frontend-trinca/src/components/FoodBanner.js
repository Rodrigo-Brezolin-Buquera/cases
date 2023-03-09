import { Img } from "@chakra-ui/react"
import FoodBackground from "../assets/FoodBackground.png"

export const FoodBanner = () => {
    return (
        <Img
            h={"300px"}
            objectFit={"cover"}
            position={"absolute"}
            top="0"
            src={FoodBackground}
        />
    )
}