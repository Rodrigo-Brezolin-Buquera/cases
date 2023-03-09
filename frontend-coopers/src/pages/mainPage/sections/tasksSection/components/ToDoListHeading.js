import { Box, Divider, Heading, Text } from "@chakra-ui/react";


export const ToDoListHeading = () => {
    return (
        <Box
            h={"280px"}
            bg={"brand.300"}
            marginBottom={"2em"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            clipPath={"polygon(0 20%, 100% 0, 100% 80%, 0 100%)"}
        >
            <Box
                w={"50%"}
                h={"180px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}

            >
                <Heading
                    fontFamily={"secondary"}
                    fontSize={["3xl", "4xl", "5xl"]}
                    color={"brand.400"}
                >
                    To-do List
                </Heading>
                <Divider
                    w={["100px", "150px", "200px"]}
                    borderColor={"brand.100"}
                    borderWidth={"0.1em"}

                    mb={"0.1em"}
                />
                <Text
                    fontFamily={"primary"}
                    color={"brand.400"}
                    textAlign={"center"}
                    w={["300px", "400px", "600px"]}
                    fontSize={["md", "xl", "xl"]}

                > Drag and drop to set your main priorities, check when done and create what´s new.
                </Text>
            </Box>

        </Box>
    )
}