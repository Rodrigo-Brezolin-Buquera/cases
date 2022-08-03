import styled from "styled-components";
import { neutralGray } from "../../../../constants/theme";

export const MainContainer = styled.div<{ lotteryId: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  width: 35%;
  color: white;
  font-weight: bold;
`;

export const Img = styled.img`
width:75px;
`

export const LogoContainer = styled.section`
display:flex;
justify-content:center;
align-items:center;
`

export const Select = styled.select`
font-size: 1em;
padding: 0.5em;
margin: 0.5em;
background: ${neutralGray};
border: none;
border-radius: 3px;
color: black
`