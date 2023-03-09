import { useState } from "react";
import {
    FormErrorMessage, FormControl, Box, Input, Text, CircularProgress, Modal,
    Button, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton
} from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { postEvent } from "../../../services/requests/postEvent";
import { useNavigate } from "react-router-dom";
import { positiveNumberPattern, stringLengthPattern, stringMaxLengthPattern } from "../../../constants/patterns";

export const AddEventModal = ({ isOpen, onClose }) => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const onSubmit = async ( values) => {
        try {
            await postEvent(values, setLoading, navigate)
            reset()
            onClose()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign={"center"}>Informações do evento</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <FormControl
                            isInvalid={
                                errors.date ||
                                errors.description ||
                                errors.observation ||
                                errors.foodContribution ||
                                errors.drinksContribution
                            }
                        >
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={"0.5em"}
                        >
                            <Text>Data</Text>
                            <Input
                                id="date"
                                {...register("date", {
                                    required: "Defina a data",

                                })}
                                type={"date"}
                                variant="outline"
                            />

                            <Text>Descrição</Text>
                            <Input
                                id="description"
                                placeholder="Descrição/nome"
                                {...register("description", {
                                    required: "Insira a descrição/nome do evento",
                                    pattern: stringLengthPattern
                                })}
                                variant="outline"
                            />

                            <Text>Observação</Text>
                            <Input
                                id="observation"
                                placeholder="Observação opcional"
                                {...register("observation", {
                                    pattern: stringMaxLengthPattern
                                }) 
                            }
                                variant="outline"
                            />

                            <Text>Contribuição sugerida: Comida</Text>
                            <Input
                                id="foodContribution"
                                type={"number"}
                                placeholder="20"
                                {...register("foodContribution",
                                    {
                                        required: "Insira um valor de contribuição para alimentação",
                                        pattern: positiveNumberPattern
                                    }
                                )}
                                variant="outline"
                            />

                            <Text>Contribuição sugerida: Bebida</Text>
                            <Input
                                id="drinksContribution"
                                placeholder="20"
                                type={"number"}
                                {...register("drinksContribution", {
                                    required: "Insira um valor de contribuição para bebidas",
                                    pattern: positiveNumberPattern
                                })}
                                variant="outline"
                            />

                        </Box>
                        <Box display={"flex"} justifyContent={"center"} m={"1em"}>
                            {loading ?
                                <CircularProgress isIndeterminate color={"brand.400"} size="30px" />
                                :
                                <Button
                                    bg={"brand.100"}
                                    borderRadius={"12px"}
                                    isLoading={isSubmitting}
                                    type="submit"

                                >
                                    Adicionar evento
                                </Button>
                            }
                        </Box>

                        <FormErrorMessage display={"flex"} flexDirection={"column"}>
                            <Text>{errors.date && errors.date.message}</Text>             
                            <Text>{errors.description && errors.description.message}</Text>              
                            <Text>{errors.observation && errors.observation.message}</Text>              
                            <Text>{errors.foodContribution && errors.foodContribution.message}</Text>                      
                            <Text>{errors.drinksContribution && errors.drinksContribution.message}</Text>
                        </FormErrorMessage>
                    </FormControl>
                </form>
            </ModalBody>
        </ModalContent>
        </Modal >

    )
}