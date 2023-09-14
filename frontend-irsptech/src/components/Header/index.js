import { useNavigate, useLocation } from "react-router-dom"
import Logo from "../../assets/whiteLogo.png"
import { StyledButton } from "../../styles/StyledButton"
import { HeaderContainer, Image } from "./styled"
import { goBack, goToMainPage } from "../../routes/coordinator"
import CreateUserModal from "../CreateUserModal"
import { useState } from "react"


const Header = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const SelectButton = () => {
        if (pathname === "/") {
            return (
                <StyledButton onClick={handleModal}>
                    Criar usuário
                </StyledButton>
            )
        } else if (pathname.startsWith("/details/")) {
            return (
                <StyledButton onClick={() => goToMainPage(navigate)}>
                    Home
                </StyledButton>
            )
        } else {
            return (
                <StyledButton onClick={() => goBack(navigate)}>
                    Voltar
                </StyledButton>
            )
        }
}

return (
    <HeaderContainer>
        <Image src={Logo} alt={"Logo"} />

        <SelectButton />

        <CreateUserModal isOpen={isModalOpen} handleModal={handleModal} />

    </HeaderContainer>
)
}

export default Header