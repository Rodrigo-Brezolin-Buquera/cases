import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:1;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  display:flex;
  flex-direction:column;
  align-items:center;

`;

export const StyleForm = styled.form`
  display:flex;
  flex-direction:column;
  gap: 0.5em;
  align-items:center;

`;
export const ErrorText = styled.p`
 color: red;
 font-weight: bold;
 font-size: 12px;
 margin:0
`;