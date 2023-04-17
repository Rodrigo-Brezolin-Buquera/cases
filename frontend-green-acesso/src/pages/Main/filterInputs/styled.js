import styled from "styled-components"
import { colors } from "../../../constants/colors"

export const FilterContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   max-width: 90%;
   min-height: 50px;
   background-color: ${colors.green};
   border-radius: 20px;
   gap: 1em;
   margin-top: 1em;
   padding: 0.5em;
`

export const TextInput = styled.input`
  min-width: 80px;
  max-width: 150px;
  min-height: 25px;
  background-color: white;
  border: 0;
  border-radius: 10px;
  font-size: 18px;
  &:hover {
    cursor: text;
  }
`;

export const StyledSelect = styled.select`
  min-width: 80px;
  max-width: 90px;
  min-height: 25px;
  background-color: white;
  border: 0;
  border-radius: 10px;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;