import styled from "styled-components";
import { neutralGray} from "../../../../constants/theme"

export const MainContainer = styled.section`
display: flex;
flex-direction: column;
width:100%;
height:100%;
justify-content: center;
align-items: center;
position: relative;
background-color: ${neutralGray};
border-radius: 30% 0 0 30%;
`

export const ResultContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10em;
flex-grow: 1;
flex-wrap: wrap;
gap: 1em;
`

export const Circle = styled.div`
display: flex;
justify-content: center;
align-items: center;
width:75px;
height:75px;
border-radius: 50%;
background-color: white;
font-size: 30px;
font-weight: bold;
`

export const TextContainer = styled.section`
display: flex;
height:10%;
width:100%;
justify-content: center;
align-items: center;
font-size: 15px;
position: relative;
padding-bottom: 2em;
`