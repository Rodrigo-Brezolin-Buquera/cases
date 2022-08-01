import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/mainPage/MainPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainPage/>} >  </Route>
            </Routes>
        </BrowserRouter>
    )
}