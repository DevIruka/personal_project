import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Devlog from "../pages/Devlog";
import CompletedProject from "../pages/CompletedProject";
import Layout from "../components/layout/Layout";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route element={<Layout />}>
                    <Route
                        path="/completed/:id?"
                        element={<CompletedProject />}
                    />
                    <Route path="/devlog/:id?" element={<Devlog />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
