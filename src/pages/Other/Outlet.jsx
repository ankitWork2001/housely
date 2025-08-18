import React from 'react';
import { Outlet } from 'react-router-dom';

/// components are imported here 
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const OutletPage = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default OutletPage;
