import styled from "styled-components"
import { colors } from "../../styles/theme";


export const InputContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 1em;
   border: 1px solid #ccc; 
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
   padding: 1em; 
   border-radius: 10px;
   margin: 1em;

   @media (max-width: 500px) { 
      flex-direction: column; 
      align-items: center
   }
`;


export const Label = styled.p`
  font-size: 18;
  color: ${colors.black}
`;

