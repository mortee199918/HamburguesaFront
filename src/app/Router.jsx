import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Registro from '../pages/Registro'
const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Login/>} />
            <Route path="/Registro" element={<Registro/>} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
</BrowserRouter>
);

export default Router;