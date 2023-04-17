import styled from "styled-components"
import { colors } from "../../constants/colors"



export const StyledButton = styled.button`
    border-radius: 8px;
    background-color: ${props => props.color || colors.green};
    color: ${colors.white};
    padding: 0.5em;
    margin: 0 0.3em;
    border: none;
    font-size: 18px;
`
