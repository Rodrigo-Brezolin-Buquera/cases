import { goToFavoritesPage, goToMainPage } from "../../routes/coordinator"
import LogoImg from "../logo"
import { StyledButton } from "../styled/StyledButton"
import { FlexContainer, HeaderContainer } from "./styled"

const Header = ({ navigate }) => {



    return (
        <HeaderContainer>
            <LogoImg />
            <FlexContainer>
                <StyledButton onClick={() => goToMainPage(navigate)}>
          Home
                </StyledButton>
                <StyledButton onClick={() => goToFavoritesPage(navigate)} >
          Favorites
                </StyledButton>
            </FlexContainer>

        </HeaderContainer>
    )
}

export default Header