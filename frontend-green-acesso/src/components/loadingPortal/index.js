import styled, { keyframes } from "styled-components";
import Portal from "../../assets/Portal.png"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.img`
    margin-top:  2em ;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    border: none;
    animation: ${rotate} 3s linear infinite;
`


const LoadingPortal = () => {
    return (
        <Loading src={Portal} alt={"LoadingPortal"}
        />
    )
}

export default LoadingPortal