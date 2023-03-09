import { TasksSection } from "./sections/tasksSection/TasksSection"
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth"
import { Box } from "@chakra-ui/react";
import { Footer } from "./sections/footer/footer";
import { Header } from "./sections/header/Header.js";
import { HomeSection } from "./sections/homeSection/HomeSection";
import { FormSection } from "./sections/formSection/FormSection";
import { CarouselSection } from "./sections/carouselSection/CarouselSection";
import { getAllTasks } from "../../services/requests/crud";

export const MainPage = () => {
    const [loading, setLoading] = useState(false)
    const { userId, loggedIn } = useAuth()
    const [tasks, setTasks] = useState([])
    const [id, setId] = useState([])

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    useEffect(() => {
        const docId = !loggedIn  ? "uMpfKFlaKcZPCt2tHswkIpirSRX2" : userId
        setId(docId)
        getAllTasks(docId, setTasks)
    }, [loading, userId, loggedIn])

    return (
        <Box
            w={"100%"}
            h={"100%"}
            minH={"100vh"}
            display={"flex"}
            flexDirection={"column"}
            bg={"brand.400"}
        >
            <Header
                loading={loading}
                setLoading={setLoading}
                loggedIn={loggedIn}
            />
            <HomeSection />
            <TasksSection
                tasks={tasks}
                userId={id}
                loggedIn={loggedIn}
                loading={loading}
                setLoading={setLoading}
            />
            <CarouselSection />
            <FormSection />
            <Footer />
        </Box>
    )
}