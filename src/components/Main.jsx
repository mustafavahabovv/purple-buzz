import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Outlet} from "react-router-dom";

const Main = () => {
    return (
        <>
            <Header/>
            <main style={{padding: '0rem'}}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Main;
