import styled from "styled-components"
import { colors } from "../../constants/colors"

export const Card = styled.div`
width: 300px;
height: 140px;
background-color: ${colors.yellow};
position: relative;
margin: 1em;
padding: 0.5em;
border-radius: 25px;
`

export const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: absolute;
  right: -16px;
  top: -16px;
`;

export const BottomContainer =  styled.div`
  width: 100%;
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`

export const InfoContainer = styled.div`
 width: 150px;
 word-wrap: break-word;   
`