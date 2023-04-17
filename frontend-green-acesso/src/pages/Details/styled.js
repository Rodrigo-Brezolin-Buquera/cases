import styled, { keyframes } from "styled-components"
import { colors } from "../../constants/colors";

export const DetailsCard = styled.div`
width: 320px;
min-height: 500px;
background-color: ${colors.yellow};
position: absolute;
margin: 3em 0 1em 0;
padding: 170px 0.5em 0 0.5em;
border-radius: 25px;
display: flex;
flex-direction: column;
font-size: 20px;
z-index:1;
top: 150px;

@media only screen and (max-width: 768px) {
  top: 240px;

}

`

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  right: 64px;
  top: -24px;
`;


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const BackgrundPortal = styled.img`
    margin-top:  2em ;
    border-radius: 50%;
    width: 700px;
    height: 700px;
    border: none;
    animation: ${rotate} 30s linear infinite;
    background-position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 20%;
    z-index:0;
    @media only screen and (max-width: 768px) {
      display: none;
    }

`

