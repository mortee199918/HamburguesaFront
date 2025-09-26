
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css' // 👈 IMPORTAMOS EL CSS
import { useState } from 'react';
import { register } from '../services/auth';

const Registro = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center registro-container">
      <div className="registro-card">
        {/* Título */}
        <h1 className="registro-title">
          Bienvenido a la noche de hamburguesas porfavor registrate
        </h1>

        {/* Espaciadores */}
        <div className="divider-yellow"></div>
        <div className="divider-red"></div>

        {/* Input Username */}
        <div className="input-container-lime">
          <input
            type="text"
            placeholder="username"
            className="registro-input"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="divider-brown"></div>

        {/* Input Password */}
        <div className="input-container-yellow">
          <input
            type="password"
            placeholder="password"
            className="registro-input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="divider-brown"></div>
        <div className="divider-brown"></div>

        {/* Botón Registrar */}
        <div className="registro-button-container">
          <button
            className="registro-button"
            onClick={() => register(username, password)}
          >
            Registrar
          </button>
        </div>

        {/* Enlace para volver al Login */}
        <div className="login-link">
          <Link to="/">¿Ya tienes cuenta? Inicia sesión</Link>
        </div>
      </div>
    </div>
  );
};

export default Registro;