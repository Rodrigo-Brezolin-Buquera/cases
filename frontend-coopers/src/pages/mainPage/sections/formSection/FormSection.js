import React from "react";
import { Box } from "@chakra-ui/react";
import { ContactCard } from "./components/ContactCard";

export const FormSection = () => {
    return (
        <section>
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <ContactCard />
            </Box >
        </section>
    )
}