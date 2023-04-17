import { useNavigate } from "react-router-dom";
import Portal from "../../assets/Portal.png"
import { Title } from "../../components/styled/PageTittle"
import { StyledButton } from "../../components/styled/StyledButton";
import { goBack } from "../../routes/coordinator";
import { PortalImg } from "./styled";



const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <Title>Morty, looks like we've wandered into a weird corner of the multiverse. This page doesn't seem to exist anywhere in the infinite realities we've explored. Better go back</Title>
            <br/>
            <StyledButton onClick={()=>goBack(navigate)}> Go back</StyledButton>
            <br/>
            <PortalImg src={Portal} />
        </>
    )
}
  
export default ErrorPage