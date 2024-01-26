import loadingImg from "../../assets/loading.png"
import { CircularLoading, LoadingContainer } from "./styles"

export const Loading = () => {
    return (
        <LoadingContainer>
            <CircularLoading  src={loadingImg} alt="Loading" />
        </LoadingContainer>
    )

}
