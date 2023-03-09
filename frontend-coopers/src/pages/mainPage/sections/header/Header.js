import { Box, Button, Text, useDisclosure } from "@chakra-ui/react"
import { LogoImage } from "../../../../components/LogoImage"
import { logout } from "../../../../services/requests/auth"
import { LoginModal } from "./LoginModal"

export const Header = ({ setLoading, loading, loggedIn }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <header>
            <Box
                w={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                padding={[" 1px 24px 0 24px", " 4px 40px 0 40px", " 8px 80px 0 80px"]}
            >
                <LogoImage />

                {loggedIn === false ?
                    <Button
                        bg={"brand.300"}
                        onClick={onOpen}
                        w={"120px"}
                        h={"40px"}
                        borderRadius={"0"}
                    >
                        <Text
                            color={"brand.400"}
                            fontFamily={"secondary"}
                            fontSize={"sm"}
                        >
                            enter
                        </Text>
                    </Button>
                    :
                    <Button
                        bg={"brand.200"}
                        onClick={() => logout(setLoading)}
                        w={"120px"}
                        h={"40px"}
                        borderRadius={"0"}
                    >
                       
                            <Text
                                color={"brand.400"}
                                fontFamily={"secondary"}
                                fontSize={"sm"}
                            >
                                exit
                            </Text>
                    </Button>

                }
            </Box>

            <LoginModal
                loading={loading}
                setLoading={setLoading}
                isOpen={isOpen}
                onClose={onClose}
            />
        </header>
    )
}