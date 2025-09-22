import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import Layout from "./Layout";

import DetalleEvento from "../pages/DetalleEvento";
import ListadoEventos from "../pages/ListadoEventos";


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Login />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="" element={<Layout />}>

                <Route path="/listado" element={<ListadoEventos />} />
                <Route path="/eventos/:id" element={<DetalleEvento />} />
            </Route>
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
);

export default Router;