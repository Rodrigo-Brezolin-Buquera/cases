import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CharacterCard from "../../components/characterCard";
import ErrorMessage from "../../components/errorMessage";
import Header from "../../components/header";
import LoadingPortal from "../../components/loadingPortal";
import { Title } from "../../components/styled/PageTittle";
import { WrapContainer } from "../../components/styled/WrapContainer";
import { useInput } from "../../hooks/useInput";
import { addToFavorites, getList } from "../../store/reducers/characters";
import FilterInputs from "./filterInputs";
import { PaginationContainer, PrevButton, NextButton } from "./styled";

const MainPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters)
    const [name, handleName] = useInput("");
    const [status, handleStatus] = useInput("");
    const [gender, handleGender] = useInput("");
    const [origin, handleOrigin] = useInput("");
    const [species, handleSpecies] = useInput("");

    const saveAsFavorite = useCallback((character) => {
        dispatch(addToFavorites(character))
    }, [dispatch])

    const changePage = useCallback((value) => {
        const [baseURL, query] = value.split("/character")
        dispatch(getList(query))
    }, [dispatch])


    useEffect(() => {
        dispatch(getList())
    }, [])

    const characterList = characters?.list?.length &&
    characters?.list.filter(i => i.name?.toLowerCase().includes(name.toLowerCase()))
        .filter(i => i.origin?.toLowerCase().includes(origin.toLowerCase()))
        .filter(i => i.species?.toLowerCase().includes(species.toLowerCase()))
        .filter(i => {
            switch (status) {
            case "Alive":
                return i.status === "Alive";
            case "Dead":
                return i.status === "Dead";
            case "unknown":
                return i.status === "unknown";
            default:
                return i
            }
        })
        .filter(i => {
            switch (gender) {
            case "Female":
                return i.gender === "Female";
            case "Male":
                return i.gender === "Male";
            case "Genderless":
                return i.gender === "Genderless";
            case "unknown":
                return i.gender === "unknown";
            default:
                return i
            }
        })
        .map((i) => <CharacterCard key={i.id} character={i} handler={() => saveAsFavorite(i)} />)


    const renderList = () => {
        switch (characters) {
        case "loading":
            return <LoadingPortal />
        case "failed":
            return <ErrorMessage/>
        default:
            return characterList

        }
    }

    return (
        <>
            <Header navigate={navigate} />
            <Title> Wubba lubba dub dub! It's time to choose your character, Morty! </Title>

            <FilterInputs
                handleName={handleName}
                handleStatus={handleStatus}
                handleGender={handleGender}
                handleOrigin={handleOrigin}
                handleSpecies={handleSpecies}
            />
            <>
                <PaginationContainer>

                    {characters?.info?.prev && <PrevButton onClick={() => changePage(characters?.info?.prev)} >Previus Page</PrevButton>}
                    {characters?.info?.next && <NextButton onClick={() => changePage(characters?.info?.next)} >Next Page</NextButton>}
                </PaginationContainer>
            </>

            <WrapContainer>
                { renderList()}
            </WrapContainer>
        </>
    )
}

export default MainPage