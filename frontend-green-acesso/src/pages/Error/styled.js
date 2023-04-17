import styled, { keyframes } from "styled-components";


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const PortalImg = styled.img`
    margin-top:  2em ;
    border-radius: 50%;
    width: 280px;
    height: 280px;
    border: none;
    animation: ${rotate} 20s linear infinite;
`