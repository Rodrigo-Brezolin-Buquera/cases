import styled from "styled-components"
import { colors } from "../../styles/theme";


export const Text = styled.p` 
  margin:0;
`


export const TextInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${colors.blue};
    box-shadow: 0 0 5px ${colors.blue};
  }
`;