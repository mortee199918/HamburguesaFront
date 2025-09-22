import { Link } from 'react-router-dom'; // Para volver al login
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { register } from '../services/auth';

const Registro = () => {

  const [username,setUsername]= useState();
  const [password,setPassword]= useState();

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#90EE90' }}>
      <div style={{ width: '500px', textAlign: 'center', margin: 'auto' }}>
        {/* Título */}
        <h1 
          style={{
            backgroundColor: '#E37807',
            color: 'yellow',
            borderRadius: '22px',
            padding: '15px',
            margin: '0',
            width: '500px',
            fontSize: '24px'
          }}
        >
          Bienvenido a la noche de hamburguesas porfavor registrate
        </h1>

        {/* Espaciador amarillo */}
        <div style={{
          backgroundColor: 'yellow',
          color: 'yellow',
          borderRadius: '22px',
          height: '10px',
          margin: '10px auto',
          width: '500px'
        }}></div>

        {/* Espaciador rojo oscuro */}
        <div style={{
          backgroundColor: '#DB3C09',
          color: '#DB3C09',
          borderRadius: '22px',
          height: '10px',
          margin: '10px auto',
          width: '500px'
        }}></div>

        {/* Input Nombre */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'limegreen',
          color: 'limegreen',
          borderRadius: '22px',
          margin: '10px auto',
          width: '500px',
          height: '40px'
        }}>
          <input
            type="text"
            placeholder="username"
            style={{
              width: '200px',
              height: '30px',
              border: 'none',
              borderRadius: '5px',
              padding: '5px',
              backgroundColor: 'white',
              fontSize: '16px',
              textAlign: 'center'
            }} onChange={(e)=>setUsername(e.target.value)}
          />
        </div>

        {/* Espaciador marrón oscuro */}
        <div style={{
          backgroundColor: 'saddlebrown',
          color: 'saddlebrown',
          borderRadius: '22px',
          height: '10px',
          margin: '10px auto',
          width: '500px'
        }}></div>

        {/* Input Apellidos */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E5BC07',
          color: '#E5BC07',
          borderRadius: '22px',
          margin: '10px auto',
          width: '500px',
          height: '40px'
        }}>
          <input
            type="text"
            placeholder="password"
            style={{
              width: '200px',
              height: '30px',
              border: 'none',
              borderRadius: '5px',
              padding: '5px',
              backgroundColor: 'white',
              fontSize: '16px',
              textAlign: 'center'
            }} onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        {/* Espaciador marrón oscuro */}
        <div style={{
          backgroundColor: 'saddlebrown',
          color: 'saddlebrown',
          borderRadius: '22px',
          height: '10px',
          margin: '10px auto',
          width: '500px'
        }}></div>

{/*          
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'limegreen',
          color: 'limegreen',
          borderRadius: '22px',
          margin: '10px auto',
          width: '500px',
          height: '40px'
        }}>
          <input
            type="date"
            placeholder="Fecha de nacimiento"
            style={{
              width: '200px',
              height: '30px',
              border: 'none',
              borderRadius: '5px',
              padding: '5px',
              backgroundColor: 'white',
              fontSize: '16px',
              textAlign: 'center'
            }}
          />
        </div>  */}

        {/* Espaciador marrón oscuro */}
        <div style={{
          backgroundColor: 'saddlebrown',
          color: 'saddlebrown',
          borderRadius: '22px',
          height: '10px',
          margin: '10px auto',
          width: '500px'
        }}></div>

        Input Correo Electrónico
        {/* <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E5BC07',
          color: '#E5BC07',
          borderRadius: '22px',
          margin: '10px auto',
          width: '500px',
          height: '40px'
        }}>
          <input
            type="email"
            placeholder="Correo electrónico"
            style={{
              width: '200px',
              height: '30px',
              border: 'none',
              borderRadius: '5px',
              padding: '5px',
              backgroundColor: 'white',
              fontSize: '16px',
              textAlign: 'center'
            }}
          />
        </div> */}

        {/* Espaciador marrón oscuro */}
        <div style={{
          backgroundColor: 'saddlebrown',
          color: 'saddlebrown',
          borderRadius: '22px',
          height: '10px',
          margin: '10px auto',
          width: '500px'
        }}></div>

        {/* Botón Registrar */}
        <div style={{
          backgroundColor: '#E37807',
          color: 'white',
          borderRadius: '22px',
          padding: '10px',
          margin: '10px auto',
          width: '500px',
          textAlign: 'center'
        }}>
          <button
            style={{
              backgroundColor: 'white',
              color: '#E37807',
              border: 'none',
              borderRadius: '5px',
              padding: '8px 16px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }} onClick={()=>{
              register(username,password);
            }}
            
          >
            Registrar
          </button>
        </div>

        {/* Enlace para volver al Login */}
        <div style={{
          marginTop: '20px',
          textAlign: 'center'
        }}>
          <Link
            to="/"
            style={{
              color: '#E37807',
              textDecoration: 'underline',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registro;