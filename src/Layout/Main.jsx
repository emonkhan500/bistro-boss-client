import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/Home/Home/Shared/Nav';
import Footer from '../Pages/Home/Home/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;