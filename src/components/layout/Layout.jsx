import { Outlet } from "react-router-dom";
import HeaderDetails from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <HeaderDetails />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
export default Layout;
