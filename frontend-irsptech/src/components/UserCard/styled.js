import styled from "styled-components"
import { colors } from "../../styles/theme";


export const Card = styled.article`
  width: 280px;
  height: 120px;
  background-color: ${colors.white};
  position: relative;
  margin: 1em;
  padding: 0.5em;
  border-radius: 25px;
  box-shadow: 0px 2px 3.84px rgba(0, 0, 0, 0.3);

`

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  right: -22px;
  top: -6px;
  box-shadow: 0px 2px 3.84px rgba(0, 0, 0, 0.3);
`;

export const InfoContainer = styled.div`
 width: 200px;
 word-wrap: break-word;   
`

export const Text = styled.p` 
  margin-block-start:0;
`

export const Title = styled.p` 
  margin-block-end:0;
  font-size:16px
`