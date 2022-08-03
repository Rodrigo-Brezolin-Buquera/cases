import styled from "styled-components";

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