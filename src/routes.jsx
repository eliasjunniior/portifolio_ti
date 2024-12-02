import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Index";
import React from 'react';
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contatos";
import Page404 from "./pages/Page404";
import PageBase from "./pages/PaginaBase";
import SenhaGame from "./components/SenhaGame/SenhaGame";


function AppRoutes(){
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <PageBase/>}>
                        <Route index element={ <Home /> }></Route>
                        <Route path="/sobre" element={ <Sobre /> }></Route>
                        <Route path="/projetos" element={ <Projetos /> }></Route>
                        <Route path="/contatos" element={ <Contatos /> }></Route>
                        <Route path="/senha-game" element={<SenhaGame />} />
                        <Route path="*" element={ <Page404 /> }></Route>
                    </Route>
                </Routes>
        </BrowserRouter>
    )


}

export default AppRoutes;