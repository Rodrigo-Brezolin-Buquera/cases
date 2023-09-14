import { colors } from "../../styles/theme";
import styled from "styled-components"

export const DetailsCard = styled.article`
width: 320px;
min-height: 450px;
background-color: ${colors.white};
margin: 50px 0 1em 0;
padding: 120px 0.5em 0.5em 0.5em; 
border-radius: 25px;
display: flex;
flex-direction: column;
font-size: 18px;
position:relative;
box-shadow: 0px 2px 3.84px rgba(0, 0, 0, 0.3);

`

export const Avatar = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  position: absolute;
  left: 75px;
  top: -40px;
  box-shadow: 0px 2px 3.84px rgba(0, 0, 0, 0.3);

`;


export const Label = styled.p` 
  margin-block-end:0;
  font-weight: bold;
`
export const ButtonContainer =styled.div` 
display:flex;
width: 100%;
justify-content:flex-end;
margin: 1em 0 1em 0;
 
`
