import styled from "styled-components"

const Icon = styled.img`
width: 30px;
height: 30px;
&:hover {
    cursor: pointer;
}
`


const HeartIcon = ({ image }) => {
    return (
        <Icon
            alt={"HeartIcon"}
            src={image}
        />
    )
}

export default HeartIcon