import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import Layout from "./Layout";

import DetalleEvento from "../pages/DetalleEvento";
import ListadoEventos from "../pages/ListasdoEventos";
import RegistroUsuario from "../pages/RegistroUsuario";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Login />} />
            <Route path="/Registro" element={<Registro />} />
            <Layout>
                <Route path="/listado" element={<ListadoEventos />} />
                <Route path="/registro" element={<RegistroUsuario />} />
                <Route path="/eventos/:id" element={<DetalleEvento />} />
            </Layout>
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
);

export default Router;