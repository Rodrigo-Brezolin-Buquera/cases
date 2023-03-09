import {
    FormErrorMessage, FormControl, Box, Input, Text, CircularProgress, Modal,
    Button, ModalBody, ModalOverlay, ModalContent, ModalCloseButton, Heading, Alert
} from "@chakra-ui/react"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginIcon } from "../../../../components/LoginIcon";
import { login, singUp } from "../../../../services/requests/auth";

export const LoginModal = ({ isOpen, onClose, loading, setLoading }) => {
    const [signUpMessage, setSignUpMessage] = useState("")
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const onLoginSubmit = async (values) => {
        try {
            await login(values, setLoading)
            reset()
            setSignUpMessage("")
            onClose()
        } catch (error) {
            console.log(error)
        }
    }

    const onSignUpSubmit = async (values) => {
        try {
            await singUp(values, setLoading)       
            setSignUpMessage("User created, you can login now")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}   >
            <ModalOverlay />
            <ModalContent w={["380px", "600px","600px"]}  >
                <ModalCloseButton size={"md"} >
                    <Text fontWeight={"bold"} >close</Text>
                </ModalCloseButton >
                <ModalBody p={"2em"} display={"flex"} flexDirection={"column"} alignItems={"center"} >
                    <Box display={"flex"} justifyContent={ "start"}  >
                        <LoginIcon />
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={'start'}
                        >
                            <Heading size={"2xl"}>Sign in </Heading>

                            <Heading color={"brand.100"} size={"lg"}>to access your list </Heading>
                        </Box>
                    </Box>
                    {signUpMessage && <Text color={"red"} fontFamily={"primary"} > {signUpMessage}</Text>}
                    <form onSubmit={handleSubmit(onLoginSubmit)} >
                        <FormControl isInvalid={errors.email || errors.password}>
                            <Box
                                minW={"342px"}
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                gap={"0.5em"}

                            >
                                <Box display={"flex"} alignItems={'flex-start'} w={"342px"}>
                                    <Text fontFamily={"primary"} fontWeight={"bold"}  >User:</Text>
                                </Box>
                                <Input
                                    fontFamily={"primary"}
                                    id="email"
                                    placeholder="e-mail"
                                    {...register("email", {
                                        required: "Insira seu email",
                                    })}
                                    variant="outline"
                                    borderRadius={"2px"}
                                    w={"342px"}
                                />
                                <Box display={"flex"} alignItems={'flex-start'} w={"342px"}>
                                    <Text fontFamily={"primary"} fontWeight={"bold"}  >Password:</Text>
                                </Box>

                                <Input
                                    fontFamily={"primary"}
                                    id="password"
                                    placeholder="senha"
                                    {...register("password", {
                                        required: "Insira sua senha",
                                    })}
                                    variant="outline"
                                    type='password'
                                    borderRadius={"2px"}
                                    w={"342px"}
                                />

                                <Button
                                    mt={4}
                                    isLoading={isSubmitting}
                                    type="submit"
                                    bg={"brand.100"}
                                    borderRadius={'0'}
                                    w={"300px"}
                                    h={"64px"}

                                >
                                    {loading ?
                                        <CircularProgress isIndeterminate color={"brand.100"} size="30px" />
                                        :
                                        <Text
                                            fontFamily={"primary"}
                                            fontSize={"xl"}
                                            color={"brand.400"}
                                            fontWeight={"bold"}
                                        >
                                            Sign in
                                        </Text>}
                                </Button>
                                <Text
                                    fontFamily={"primary"}
                                    fontWeight={"bold"}
                                    textAlign={"center"}
                                >
                                    or
                                </Text>
                                <Button
                                    mt={4}
                                    isLoading={isSubmitting}
                                    type="submit"
                                    bg={"brand.100"}
                                    borderRadius={'0'}
                                    w={"300px"}
                                    h={"64px"}
                                    onClick={handleSubmit(onSignUpSubmit)}

                                >
                                    {loading ?
                                        <CircularProgress isIndeterminate color={"brand.300"} size="30px" />
                                        :
                                        <Text
                                            fontFamily={"primary"}
                                            fontSize={"xl"}
                                            color={"brand.400"}
                                            fontWeight={"bold"}
                                        >
                                            Sign Up
                                        </Text>}
                                </Button>

                            </Box>
                            <FormErrorMessage
                                fontFamily={"primary"}
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems={"center"}
                            >
                                {errors.email && errors.email.message}
                                <br />
                                {errors.password && errors.password.message}
                            </FormErrorMessage>
                        </FormControl>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal >

    )
}