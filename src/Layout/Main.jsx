import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Shared/Footer";
import NavBar from "../Pages/Home/Shared/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;