import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistroUsuario = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar error del campo cuando el usuario escribe
    if (errores[name]) {
      setErrores((prev) => {
        const nuevosErrores = { ...prev };
        delete nuevosErrores[name];
        return nuevosErrores;
      });
    }
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!usuario.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    if (!usuario.email.trim()) {
      nuevosErrores.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(usuario.email)) {
      nuevosErrores.email = "Email inválido";
    }

    if (!usuario.password) {
      nuevosErrores.password = "La contraseña es obligatoria";
    } else if (usuario.password.length < 6) {
      nuevosErrores.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (usuario.password !== usuario.confirmarPassword) {
      nuevosErrores.confirmarPassword = "Las contraseñas no coinciden";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarFormulario()) return;

    // Aquí harías el fetch a tu backend
    console.log("Registrando usuario:", usuario);

    // Simulación de envío
    setTimeout(() => {
      setEnviado(true);
      alert("¡Usuario registrado con éxito! 🎉");
      navigate("/login"); // o a donde quieras redirigir
    }, 1000);
  };

  if (enviado) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-success" role="alert">
          <i className="bi bi-check-circle-fill me-2"></i>
          ¡Usuario registrado con éxito! Redirigiendo...
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-4">
                <i className="bi bi-person-plus-fill text-primary" style={{ fontSize: "3rem" }}></i>
                <h2 className="mt-3 fw-bold text-primary">Crear Cuenta</h2>
                <p className="text-muted">¡Únete a nuestra comunidad!</p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Nombre */}
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label fw-semibold">
                    <i className="bi bi-person me-2"></i>
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className={`form-control form-control-lg rounded-pill ${errores.nombre ? "is-invalid" : ""
                      }`}
                    placeholder="Ej: Juan Pérez"
                    value={usuario.nombre}
                    onChange={handleChange}
                    required
                  />
                  {errores.nombre && (
                    <div className="invalid-feedback">{errores.nombre}</div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    <i className="bi bi-envelope me-2"></i>
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control form-control-lg rounded-pill ${errores.email ? "is-invalid" : ""
                      }`}
                    placeholder="ejemplo@correo.com"
                    value={usuario.email}
                    onChange={handleChange}
                    required
                  />
                  {errores.email && (
                    <div className="invalid-feedback">{errores.email}</div>
                  )}
                </div>

                {/* Contraseña */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold">
                    <i className="bi bi-lock me-2"></i>
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={`form-control form-control-lg rounded-pill ${errores.password ? "is-invalid" : ""
                      }`}
                    placeholder="••••••••"
                    value={usuario.password}
                    onChange={handleChange}
                    required
                  />
                  {errores.password && (
                    <div className="invalid-feedback">{errores.password}</div>
                  )}
                </div>

                {/* Confirmar Contraseña */}
                <div className="mb-4">
                  <label htmlFor="confirmarPassword" className="form-label fw-semibold">
                    <i className="bi bi-check2-square me-2"></i>
                    Confirmar Contraseña
                  </label>
                  <input
                    type="password"
                    id="confirmarPassword"
                    name="confirmarPassword"
                    className={`form-control form-control-lg rounded-pill ${errores.confirmarPassword ? "is-invalid" : ""
                      }`}
                    placeholder="••••••••"
                    value={usuario.confirmarPassword}
                    onChange={handleChange}
                    required
                  />
                  {errores.confirmarPassword && (
                    <div className="invalid-feedback">
                      {errores.confirmarPassword}
                    </div>
                  )}
                </div>

                {/* Botón de registro */}
                <div className="d-grid mb-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-pill fw-bold py-3"
                  >
                    <i className="bi bi-person-check me-2"></i>
                    Registrarse
                  </button>
                </div>

                {/* Enlace a login */}
                <div className="text-center">
                  <p className="mb-0">
                    ¿Ya tienes cuenta?{" "}
                    <a href="/login" className="text-primary fw-semibold">
                      Inicia sesión aquí
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroUsuario;