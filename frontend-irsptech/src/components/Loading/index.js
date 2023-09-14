import styled, { keyframes } from "styled-components";
import LoadingImg from "../../assets/loading.png"
 
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
    margin-top:  2em ;
    border-radius: 50%;
    width: ${({size})=> size || "150px"};
    height: ${({size})=> size || "150px"};
    border: none;
    animation: ${rotate} 2s linear infinite;
`


const Loading = ({size}) => {
    return (
        <Image src={LoadingImg} alt={"Loading"} size={size} />
    )
}

export default Loading