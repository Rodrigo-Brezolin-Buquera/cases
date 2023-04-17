import styled from "styled-components"
import { StyledButton } from "../../components/styled/StyledButton"

export const PaginationContainer = styled.div`
   position: relative;
   width: 280px;
   margin: 1em 0 3em 0;
`



export const PrevButton = styled(StyledButton)`
   position: absolute;
   left: 0;
`

export const NextButton = styled(StyledButton)`
   position: absolute;
   right: 0;
`

