import { styled } from "styled-components";

export const ColumnHeader = styled.h4`
  width: ${props => props.width};
  display:flex;
  justify-content:  ${props => props.justify || "flex-start"} ;
  align-items: center;
  padding: 8px 0;
  font-weight: bold;
  text-align: center;
`

export const TableItem = styled.p`
  width: ${props => props.width};
  height: 28px;
  display:flex;
  justify-content:  ${props => props.justify || "flex-start"} ;
  align-items: center;  
`

export const Row = styled.article`
  width: 100%;
  display:flex;
  align-items: center;
  gap: 8px;
`

export const Table = styled.section`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--neutral-color);
  padding: 16px;
  border-radius: 15px;
  box-shadow: 0 0 1px black;

`

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 16px;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  position:relative;
`

export const AbsoluteText = styled.p`
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 0.9em;
`

