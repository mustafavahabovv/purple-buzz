import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../components/Main.jsx";
import Home from "../Home.jsx";
import About from "../About.jsx";
import Contact from "../Contact.jsx";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="contact" element={<Contact/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
