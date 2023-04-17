import styled from "styled-components"
import { colors } from "../../constants/colors"


export const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.yellow};
    position:relative;
`

export const FlexContainer = styled.div`
display: flex;
justify-content:center;
align-items: center;
position: absolute;
right: 0;
`