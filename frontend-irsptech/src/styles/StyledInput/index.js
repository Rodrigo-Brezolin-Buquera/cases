
import styled from 'styled-components';
import { colors } from '../theme';

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: ${({width})=> width || "100%"};
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${colors.blue};
    box-shadow: 0 0 5px ${colors.blue};
  }
`;