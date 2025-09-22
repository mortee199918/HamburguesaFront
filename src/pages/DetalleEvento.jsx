import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetalleEvento = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [evento, setEvento] = useState(null);
  const [nuevoParticipante, setNuevoParticipante] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/eventos/${id}`)
      .then((res) => res.json())
      .then((data) => setEvento(data))
      .catch((err) => console.error("Error cargando evento", err));
  }, [id]);

  const agregarParticipante = () => {
    if (!nuevoParticipante.trim()) return;

    const actualizado = {
      ...evento,
      participantes: [...evento.participantes, nuevoParticipante],
    };

    fetch(`http://localhost:8080/api/eventos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(actualizado),
    })
      .then((res) => res.json())
      .then((data) => {
        setEvento(data);
        setNuevoParticipante("");
      })
      .catch((err) => console.error("Error al agregar participante:", err));
  };

  const eliminarEvento = () => {
    if (confirm("¿Seguro que quieres eliminar este evento?")) {
      fetch(`http://localhost:8080/api/eventos/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          alert("Evento eliminado correctamente");
          navigate("/");
        })
        .catch((err) => console.error("Error al eliminar evento:", err));
    }
  };

  if (!evento) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Botón de volver con ícono y estilo */}
      <div className="mb-4">
        <button
          onClick={() => navigate("/")}
          className="btn btn-outline-secondary rounded-pill px-4"
        >
          <i className="bi bi-arrow-left me-2"></i>
          Volver al listado
        </button>
      </div>

      {/* Tarjeta principal del evento */}
      <div className="card shadow-lg rounded-4 border-0 mb-5 bg-gradient-custom text-white">
        <div className="card-body text-center py-5">
          <h1 className="display-5 fw-bold mb-3">{evento.nombre}</h1>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <div className="d-flex align-items-center">
              <i className="bi bi-calendar-event fs-4 me-2"></i>
              <span>{new Date(evento.fecha).toLocaleDateString("es-ES")}</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-geo-alt fs-4 me-2"></i>
              <span>{evento.lugar}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de participantes */}
      <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-primary">
            <i className="bi bi-people me-2"></i>
            Participantes ({evento.participantes.length})
          </h2>
        </div>

        {evento.participantes.length > 0 ? (
          <ul className="list-group list-group-flush">
            {evento.participantes.map((p, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center border-0 py-3 px-0"
              >
                <span className="fw-medium">{p}</span>
                <span className="badge bg-light text-dark rounded-pill">#{index + 1}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="alert alert-info text-center mb-4" role="alert">
            <i className="bi bi-emoji-frown me-2"></i>
            Aún no hay participantes. ¡Agrega el primero!
          </div>
        )}

        {/* Formulario para agregar participante */}
        <div className="input-group mt-4">
          <input
            type="text"
            className="form-control form-control-lg rounded-pill"
            placeholder="Nombre del nuevo participante"
            value={nuevoParticipante}
            onChange={(e) => setNuevoParticipante(e.target.value)}
          />
          <button
            onClick={agregarParticipante}
            className="btn btn-primary rounded-pill px-4"
            type="button"
          >
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>

      {/* Botón de eliminar (con confirmación visual) */}
      <div className="text-center">
        <button
          onClick={eliminarEvento}
          className="btn btn-danger btn-lg rounded-pill px-5 fw-bold"
        >
          <i className="bi bi-trash me-2"></i>
          Eliminar Evento
        </button>
      </div>
    </div>
  );
}

export default DetalleEvento;
