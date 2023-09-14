import styled from "styled-components"
import { colors } from "../theme"


export const StyledButton = styled.button`
    border-radius: 8px;
    background-color: ${props => props.color || colors.yellow};
    color: ${colors.black};
    padding: 0.5em;
    margin: 0 0.3em;
    border: none;
    font-size: 18px;
    box-shadow: 0px 2px 3.84px rgba(0, 0, 0, 0.3);

  &:hover {
    cursor: pointer; 
    background-color: ${colors.lightYellow}; 
    transition: background-color 0.3s ease; 
  }
`
