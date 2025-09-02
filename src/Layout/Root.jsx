import { Outlet } from "react-router-dom";
import Home from "../Component/Home";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const Root = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="mb-5">
                <Navbar></Navbar>
            </div>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;