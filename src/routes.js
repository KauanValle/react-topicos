import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import About from './about/about';
import Main from "./main/Main";

function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Main/>}/>
                <Route path="/sobre" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;