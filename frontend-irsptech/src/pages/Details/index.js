import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import confirmDialog from '../../components/confirmDialog';
import DoubleClickText from '../../components/DoubleClickText';
import Loading from '../../components/Loading';
import { goToMainPage } from '../../routes/coordinator';
import { getDetails } from '../../store/reducers/selectedUser';
import { deleteUser } from '../../store/reducers/users';
import { MainContainer } from '../../styles/MainContainer';
import { StyledButton } from '../../styles/StyledButton';
import { Avatar, DetailsCard, Label, ButtonContainer } from './styled';

const DetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const user = useSelector(state => state.selectedUser)


  useEffect(() => {
    dispatch(getDetails(id))
  }, [])

  const onDelete = () => {
    confirmDialog("Excluir usuário?", () => {
      dispatch(deleteUser(id))
        .then(goToMainPage(navigate))
    })
  }

  if (user == "loading") {
    return <Loading />
  }

  if (user == "failed") {
    return <h3>Algo deu errado, tente novamente</h3>
  }


  return (
    <MainContainer>

      <DetailsCard>

        <Avatar src={user.picture} />

        <Label>  Nome:  </Label>
        <DoubleClickText
          field={"name"}
          text={user.name}
          dispatch={dispatch}
          id={id}
        />

        <Label>  Genêro:  </Label>
        <DoubleClickText
          field={"gender"}
          text={user.gender}
          dispatch={dispatch}
          id={id}
        />

        <Label>  Email: </Label>
        <DoubleClickText field={"email"}
          text={user.email}
          dispatch={dispatch}
          id={id}
        />

        <Label>  Telefone:  </Label>
        <DoubleClickText
          field={"phone"}
          text={user.phone}
          dispatch={dispatch}
          id={id}
        />

        <Label>  Pais: </Label>
        <DoubleClickText
          field={"country"}
          text={user.country}
          dispatch={dispatch}
          id={id}
        />

        <Label>  Estado: </Label>
        <DoubleClickText
          field={"state"}
          text={user.state}
          dispatch={dispatch}
          id={id}
        />

        <Label>  Cidade:  </Label>
        <DoubleClickText
          field={"city"}
          text={user.city}
          dispatch={dispatch}
          id={id}
        />

        <ButtonContainer>
          <StyledButton onClick={onDelete}>
            Excluir usuário
          </StyledButton>
        </ButtonContainer>
      </DetailsCard>
    </MainContainer>)
}

export default DetailsPage