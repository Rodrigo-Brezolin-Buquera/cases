import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Portal from "../../assets/Portal.png"
import ErrorMessage from "../../components/errorMessage";
import Header from "../../components/header";
import LoadingPortal from "../../components/loadingPortal";
import { Title } from "../../components/styled/PageTittle";
import { getDetails } from "../../store/reducers/selectedCharacter";
import { DetailsCard, Avatar, BackgrundPortal } from "./styled";


const DetailsPage = () => {
    const dispatch = useDispatch();
    const selectedCharacter = useSelector((state) => state.selectedCharacter)
    const { id } = useParams()
    const navigate = useNavigate()

    
    useEffect(() => {
        id && dispatch(getDetails(id))
    }, [id])

    const renderCharacter = () => {
        switch (selectedCharacter) {
        case "loading":
            return <LoadingPortal />
        case "failed":
            return <ErrorMessage />
        default:
            return (
                <DetailsCard>
          
                    <Avatar src={selectedCharacter.image} />
                    <h1>{selectedCharacter.name}</h1>
                    <p><strong>Species:</strong> {selectedCharacter.species}</p>
                    <p><strong>Gender:</strong> {selectedCharacter.gender}</p>
                    <p><strong>Status:</strong> {selectedCharacter.status}</p>
                    <p><strong>Type:</strong> {selectedCharacter.type || "not applicable"}</p>
                    <p><strong>Origin:</strong> {selectedCharacter.origin}</p>
                    <p><strong>Location:</strong> {selectedCharacter.location}</p>
                </DetailsCard>
            )
        }
    }


    return (
        <>
            <Header navigate={navigate} />
            <Title>Hey Morty, let's check out the schematics on this character! We'll need to run a diagnostic and analyze its entire molecular structure</Title>
            <BackgrundPortal src={Portal} />
            {renderCharacter()}
        </>
    )
}

export default DetailsPage