import { memo } from "react"
import { useNavigate } from "react-router-dom"
import EmptyHeart from "../../assets/EmptyHeart.svg"
import Heart from "../../assets/Heart.svg"
import { colors } from "../../constants/colors"
import { goToDetailsPage } from "../../routes/coordinator"
import HeartIcon from "../heartIcon"
import { StyledButton } from "../styled/StyledButton"
import { Card, Avatar, BottomContainer, InfoContainer } from "./styled"

const CharacterCard = ({ character, handler }) => {
    const navigate = useNavigate()

    return (
        <Card>
            <InfoContainer>
                <h2>{character.name}</h2>
            </InfoContainer>

            <Avatar src={character.image} alt={`${character.name} avatar`}/>
            <BottomContainer>

                {
                    character.favorite ?
                        <div onClick={() => handler(character)}>
                            <HeartIcon image={Heart} />
                        </div>
                        :
                        <div onClick={() => handler(character)}>
                            <HeartIcon image={EmptyHeart} />
                        </div>
                }
                <StyledButton 
                    onClick={() => goToDetailsPage(navigate, character.id)}
                    color={colors.brown}
                >
           Details
                </StyledButton>
            </BottomContainer>

        </Card>
    )
}

export default memo(CharacterCard)