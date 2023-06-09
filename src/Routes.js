import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HistorialNiveles } from "./pages/HistorialNiveles";
import { Tanque } from "./pages/Tanque";
import { NotFoundPage } from "./pages/NotFoundPage";

export const Rutas = () => {
    return (
        <Router>
        <Routes>

            <Route path="/" exact element={<Navigate to="/Tanque"/>}>
            </Route>

            <Route path="/Tanque/:tanque" element={<Tanque/>}>
            </Route>

            <Route path="/Historial/:tanque/:fecha" element={<HistorialNiveles/>}>
            </Route>

            <Route element={<NotFoundPage/>}>
            </Route>
        
        </Routes>
        </Router>
    );

}