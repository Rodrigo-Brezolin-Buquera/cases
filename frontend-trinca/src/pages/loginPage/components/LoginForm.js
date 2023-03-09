import { useState } from 'react'
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormControl,
  Box,
  Input,
  Button, Text, CircularProgress
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { login } from '../../../services/requests/auth';

export const LoginForm = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (values) => {
    setLoading(true)
    await login(values, navigate, setLoading)
    reset()
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <form onSubmit={handleSubmit(onSubmit)} >
        <FormControl isInvalid={errors.email || errors.password}>
          <Box
            minW={"250px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.5em"}
          >
            <Text fontWeight="bold" >Login</Text>
            <Input
              backgroundColor={"brand.400"}
              id="email"
              placeholder="e-mail"
              {...register("email", {
                required: "Insira seu email",
              })}
              variant="outline"
              borderRadius={"2px"}
            />

            <Text fontWeight="bold">Senha</Text>
            <Input
              backgroundColor={"brand.400"}
              id="password"
              placeholder="senha"
              {...register("password", {
                required: "Insira sua senha",
              })}
              variant="outline"
              type='password'
              borderRadius={"2px"}
            />

            <Button
              mt={4}
              isLoading={isSubmitting}
              type="submit"
              bg={"brand.300"}
              borderRadius={"18px"}
            >
              {loading ?
                <CircularProgress isIndeterminate color={"brand.400"} size="30px" />
                :
                <Text color={"brand.400"}>
                  Login
                </Text>}
            </Button>
          </Box>
          <FormErrorMessage>
            {errors.email && errors.email.message}
            <br />
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
      </form>
    </Box>
  )
}

