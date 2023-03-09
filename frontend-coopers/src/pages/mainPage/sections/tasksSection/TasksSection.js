
import { DragAndDropList } from "./components/DragAndDropList"
import { ToDoListHeading } from "./components/ToDoListHeading"
import { Box, Image } from "@chakra-ui/react"
import Arrow from "../../../../assets/Arrow.png"
import Triangle from "../../../../assets/Triangle.png"

export const TasksSection = ({setLoading, loading, userId, tasks}) => {
 
    return (
        <section id="tasks">
            <Box mb={"4em"} position={"relative"}>

                <Image
                    w={"40px"}
                    h={"40px"}
                    src={Arrow}
                    position={"absolute"}
                    top={["-2%", "-3%", "-5%"]}
                    left={"50%"}
                />

                <ToDoListHeading />
                <Box
                    display={"flex"}
                    overflow={"hidden"}
                    position={"relative"}
                >
                    <Image
                        maxH={"500px"}
                        src={Triangle}
                        transform={"rotate(90deg)"}
                        position={"absolute"}
                        left={'-380px'}
                    />

                    <Image
                        maxH={"500px"}
                        src={Triangle}
                        color={"brand.200"}
                        mixBlendMode={"multiply"}
                        transform={"rotate(90deg)"}
                        position={"absolute"}
                        left={'-420px'}
                        top={"-20px"}
                    />

                    <DragAndDropList
                        tasks={tasks}
                        userId={userId}
                        setLoading={setLoading}
                    />
                </Box>

            </Box>



        </section>
    )
}