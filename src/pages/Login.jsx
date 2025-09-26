
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Importamos nuestro CSS personalizado
import { useState } from 'react';
import { login } from '../services/auth';
import useToken from '../hooks/useToken';  

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { token, addToken } = useToken();
    const navigate = useNavigate();

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center login-container">
            <div className="login-card">
                <h1 className="title-bar">
                    Bienvenido a la noche de hamburguesas porfavor registrate
                </h1>
                <div className="spacer-yellow"></div>
                <div className="spacer-red"></div>
                <div className="input-wrapper limegreen">
                    <input
                        type="text"
                        placeholder="username"
                        className="login-input"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </div>
                <div className="spacer-brown"></div>

                {/* Input password */}
                <div className="input-wrapper yellowgold">
                    <input
                        type="password"
                        placeholder="password"
                        className="login-input"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                {/* Espaciador marrón oscuro */}
                <div className="spacer-brown"></div>

                {/* Contenedor de Botón Login + Enlace Registro */}
                <div className="button-container">
                    <button
                        className="login-btn"
                        onClick={() => {
                            console.log(username, password);
                            login(username, password)
                            .then(addToken)
                            .then(()=>navigate("/listado"));

                        }}
                    >
                        Login
                    </button>

                    <Link to="./Registro" className="register-link">
                        Registrarse
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;