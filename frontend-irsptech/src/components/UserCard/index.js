import { memo } from "react"
import { goToDetailsPage } from "../../routes/coordinator"
import { Card, Avatar, InfoContainer, Text, Title } from "./styled"
import { StyledButton } from "../../styles/StyledButton"

const UserCard = ({ user, navigate }) => {

    return (
        <Card>
            <InfoContainer>
                <Title>{user.name}</Title>
                <Text>{user.country}</Text>
                <StyledButton
                    onClick={() => goToDetailsPage(navigate, user.id)}
                >
                    Detalhes
                </StyledButton>
            </InfoContainer>
            <Avatar src={user.picture} alt={`${user.name} avatar`} />
        
        </Card>
    )
}

export default memo(UserCard)