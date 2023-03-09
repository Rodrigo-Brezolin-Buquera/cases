import { useDisclosure, Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AppNameHeading } from "../../components/AppNameHeading"
import { FoodBanner } from "../../components/FoodBanner"
import { GoBackButton } from "../../components/GoBackButton"
import { LogoImage } from "../../components/LogoImage"
import { LogoutButton } from "../../components/LogoutButton"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { getEventById } from "../../services/requests/getEventById"
import { AddParticipantsModal } from "./components/AddParticipantsModal"
import { DetailsCard } from "./components/DetailsCard"

const DetailsPage = () => {
    useProtectedPage()
    const { id } = useParams()
    const [details, setDetails] = useState(null)
    const [loading, setLoading] = useState(false)
    const [refreshPage, setRefreshPage] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        getEventById(id, setDetails)
    }, [loading, refreshPage])

    return (
        <>
            <Box
                w={"100%"}
                h={"100%"}
                minH={"100vh"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                backgroundColor={"brand.400"}
            >
                <FoodBanner/>
                <Box w={"100%"} display={"flex"} justifyContent={"end"} >
                    <GoBackButton/>
                    <LogoutButton />
                </Box>
                <AppNameHeading />
                <DetailsCard
                    details={details}
                    onOpen={onOpen}
                    onClose={onClose}
                    id={id}
                    setRefreshPage={setRefreshPage}
                    refreshPage={refreshPage}
                />
                <LogoImage/>
            </Box>


            <AddParticipantsModal
                isOpen={isOpen} onClose={onClose}
                contributions={
                    {
                        foodContribution: details?.foodContribution,
                        drinksContribution: details?.drinksContribution
                    }
                }
                participants={details?.participants}
                eventId={id}
                setLoading={setLoading}
            />
        </>

    )
}

export default DetailsPage
