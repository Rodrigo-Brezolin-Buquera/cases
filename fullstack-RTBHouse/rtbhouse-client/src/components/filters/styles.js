import { styled } from "styled-components";

export const StyledInput = styled.input`
  padding: 0.5em;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 1px black;
  width: ${props => props.width || "auto"};
`
export const StyledSelect = styled.select`
  padding: 0.5em;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 1px black;
  width: 156px;
`

export const StyledButton = styled.button`
  padding: 0.5em 1em;
  border-radius: 15px;
  border: none;
  box-shadow: 0 0 1px black;
  background-color: var(--accent-color);
  color: var(--text-variant-color);
  font-weight:bold;

  &:hover{
    background-color: var(--primary-color);
    cursor: pointer;
  }
`

export const InputLine = styled.div`
  display: flex;
  align-items:center;
  gap: 4px;
`

export const StyledLabel = styled.label`
  font-weight: bold;
`

export const FiltersContainer = styled.section`
  height: 100%;
  width: 220px;
  display:flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: flex-start;
  gap: 16px;
  background-color:var(--neutral-color);
  padding: 16px 0 0 12px;
  box-shadow: 0 0 1px black;

`