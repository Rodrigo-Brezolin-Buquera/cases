import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";

const MainPage = lazy(() => import("../pages/Main"));
const DetailsPage = lazy(() => import("../pages/Details"));
const ErrorPage = lazy(() => import("../pages/Error"));


const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={ <Loading size={"200px"}/>}>
                <Header/>
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path="/details/:id" element={<DetailsPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;
