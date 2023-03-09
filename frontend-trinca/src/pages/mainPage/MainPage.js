import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { AppNameHeading } from "../../components/AppNameHeading"
import { LogoutButton } from "../../components/LogoutButton"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { formatDate } from "../../services/dates/formatDate"
import { getAllEvents } from "../../services/requests/getAllEvents"
import { sumContributions } from "../../utils/sumContributions"
import { AddEventCard } from "./components/AddEventCard"
import { EventCard } from "./components/EventCard"
import { FoodBanner } from "../../components/FoodBanner"
import {LogoImage} from "../../components/LogoImage"

const MainPage = () => {
    useProtectedPage()
    const [events, setEvents] = useState([])
    
    useEffect(() => {
        getAllEvents(setEvents)
    }, [])

    const eventList = events?.length ? events.map((event) => {
        return <EventCard
            key={event.id}
            id={event.id}
            date={formatDate(event.date)}
            description={event.description}
            observation={event.observation}
            totalParticipants={event.participants.length}
            totalValue={sumContributions(event.participants)}
           
        />
    })
        :
        null

    return (
        <Box
            w={"100%"}
            h={"100%"}
            minH={"100vh"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"brand.400"}
        >
            <FoodBanner />
            <Box w={"100%"}  display={"flex"} justifyContent={"end"} >
                <LogoutButton />
            </Box>

            <AppNameHeading />

            <Box
                bg={"brand.400"}
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent={"space-evenly"}
                mt={"2em"}
            >
                {eventList}
                <AddEventCard />
            </Box>
            <LogoImage/> 
        </Box>

    )
}

export default MainPage
