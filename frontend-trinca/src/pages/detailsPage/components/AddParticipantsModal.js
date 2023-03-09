import {
    FormControl, Box, Input, Modal,
    Button, ModalBody, ModalOverlay, ModalContent, 
    ModalHeader, ModalCloseButton, FormLabel, Checkbox
} from "@chakra-ui/react"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { stringLengthPattern } from "../../../constants/patterns";
import { updateParticipants } from "../../../services/requests/updateParticipants";
import { toModelParticipants } from "../../../utils/toModelParticipants";

export const AddParticipantsModal = (
    { isOpen, onClose, contributions, participants, eventId, setLoading }
) => {
    const [participantsQuantity, setParticipantsQuantity] = useState(0)
    const [participantsIndexes, setParticipantsIndexes] = useState([]);
    const { handleSubmit, register,reset } = useForm();

    const onSubmit = async (values) => {
        try {
            let list = toModelParticipants(contributions, values.participant)
            await updateParticipants(eventId, [...participants, ...list], setLoading) 
            reset()
            clearParticipants()
            onClose()
        } catch (error) {
            console.log(error)
            alert("Erro ao adicionar participantes, tente novamente")
        }
    }

    const addParticipant = () => {
        setParticipantsIndexes(prevIndexes => [...prevIndexes, participantsQuantity]);
        setParticipantsQuantity(prevCounter => prevCounter + 1);
    };

    const clearParticipants = () => {
        setParticipantsIndexes([])
        setParticipantsQuantity(0);
    };

    const inputList = participantsIndexes?.map((index) => {
        const fieldName = `participant[${index}]`;
        return (
            <fieldset name={fieldName} key={fieldName} >
                <Box display={"flex"} gap={"1em"} alignItems={"center"}>
                    <Input
                        placeholder="Nome"
                        type="text"
                        {...register(`${fieldName}.name`, {
                            pattern: stringLengthPattern
                        })}
                    />
                    <FormLabel textAlign={"center"} >
                        Comida:
                        <Checkbox colorScheme={"yellow"}
                            {...register(`${fieldName}.food`)}
                        />
                    </FormLabel>
                    <FormLabel textAlign={"center"} >
                        Bebida:
                        <Checkbox colorScheme={"yellow"}
                            {...register(`${fieldName}.drinks`)}
                        />
                    </FormLabel></Box>
            </fieldset>
        )
    })

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign={"center"}>Adicionar pessoas</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <FormControl  >
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                gap={"0.5em"}
                            >

                                <Box display={"flex"} justifyContent={"center"} gap={"0.5em"}>
                                    <Button bg={"brand.100"} onClick={addParticipant} borderRadius={"12px"} >
                                        Nova pessoa
                                    </Button>
                                    <Button onClick={clearParticipants} borderRadius={"12px"}>
                                        Limpar lista
                                    </Button>
                                </Box>

                                {inputList}
                            </Box>
                            {
                                inputList.length ?
                                    <Box display={"flex"} justifyContent={"center"} m={"1em"} >
                                        <Button bg='brand.100' mr={3} type="submit" >
                                            Finalizar
                                        </Button>
                                    </Box>
                                    :
                                    null
                            }
                        </FormControl>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>

    )
}