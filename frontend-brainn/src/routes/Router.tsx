import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/mainPage/MainPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>} >  </Route>
            </Routes>
        </BrowserRouter>
    )
}