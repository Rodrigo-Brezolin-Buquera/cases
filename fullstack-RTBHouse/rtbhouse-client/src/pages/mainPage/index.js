import { Filters } from "../../components/filters"
import { Header } from "../../components/header"
import { Loading } from "../../components/loading"
import { ProductsTable } from "../../components/productsTable"
import { MainContainer, ProductsContainer } from "./styles"
import { useMainPageLogic } from "./useMainPageLogic.js"

export const MainPage = () => {
    const [products, loading, inputHandlers, inputValues] = useMainPageLogic()

    if (loading) {
        return <Loading />
    }

    return (
        <MainContainer>
            <Header />
            <ProductsContainer>
                <Filters inputHandlers={inputHandlers} inputValues={inputValues} />
                <ProductsTable products={products} />
            </ProductsContainer>
        </MainContainer>
    )
}
