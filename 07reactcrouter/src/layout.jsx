import React from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Outlet } from "react-router-dom"; //to change


function Layout(){
    return(
        <>
        <Header />
        <Outlet/>
        <Footer />
        </>
    )
}

export default Layout