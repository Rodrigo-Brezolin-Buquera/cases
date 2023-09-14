import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import UserCard from "../../components/UserCard";
import { useInput } from "../../hooks/useInput";
import { MainContainer } from "../../styles/MainContainer"
import { StyledInput } from "../../styles/StyledInput";
import { WrapContainer } from "../../styles/WrapContainer";
import { InputContainer, Label } from "./styled";

const MainPage = () => {
  const navigate = useNavigate()
  const users = useSelector(state => state.users)
  const [name, handleName] = useInput("");
  const [country, handleCountry] = useInput("");

  const usersList = Array.isArray(users) &&
    users
      .filter(i => i.name?.toLowerCase().includes(name.toLowerCase()))
      .filter(i => i.country?.toLowerCase().includes(country.toLowerCase()))
      .map(i => <UserCard user={i} key={i.id} navigate={navigate} />)

  if (users == "loading") {
    return <Loading />
  }

  if (users == "failed") {
    return <h3>Algo deu errado, tente novamente</h3>
  }


  return (
    <MainContainer>
      <InputContainer >
        <Label> Filtre por:</Label>
        <StyledInput
          onChange={handleName}
          placeholder="Nome"
          width={"150px"}
        />

        <StyledInput
          onChange={handleCountry}
          placeholder="País"
          width={"150px"}
        />

      </InputContainer >

      <WrapContainer>
        {usersList}
      </WrapContainer>
    </MainContainer>

  )
}

export default MainPage