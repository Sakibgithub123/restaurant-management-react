import { Outlet } from "react-router-dom";
import Header from "../Shared/Footer/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
    return (
        <div>

            <Header></Header>
            <div className="max-w-6xl mx-auto">
            <Outlet></Outlet>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Root;