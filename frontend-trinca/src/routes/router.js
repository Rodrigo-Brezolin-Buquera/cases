import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from "../pages/loginPage/LoginPage"
import DetailsPage from "../pages/detailsPage/DetailsPage"
import MainPage from "../pages/mainPage/MainPage"
import ErrorPage from "../pages/errorPage/ErrorPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element ={<LoginPage/>}/>
                <Route path='/main' element ={<MainPage/>}/>
                <Route path='/details/:id' element ={<DetailsPage/>}/>
                <Route path='*' element ={<ErrorPage/>}/>        
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
