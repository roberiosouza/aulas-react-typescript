import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Dashboard } from "../pages";

export const MainRoute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element={<Dashboard />}></Route>
                <Route path="*" element={<Navigate to="/pagina-inicial" />}></Route>
            </Routes>
        </BrowserRouter>
    );
};