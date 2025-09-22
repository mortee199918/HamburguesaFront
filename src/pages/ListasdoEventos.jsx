import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListadoEventos = () => {
  const [eventos, setEventos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [lugar, setLugar] = useState("");
  const navigate = useNavigate();

  // Cargar eventos al montar componente
  const cargarEventos = () => {
    fetch("http://localhost:8080/api/eventos")
      .then((res) => res.json())
      .then((data) => setEventos(data))
      .catch((err) => console.error("Error cargando eventos", err));
  };

  useEffect(() => {
    cargarEventos();
  }, []);

  // Crear nuevo evento
  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoEvento = { nombre, fecha, lugar, participantes: [] };

    fetch("http://localhost:8080/api/eventos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoEvento),
    })
      .then((res) => res.json())
      .then(() => {
        cargarEventos(); // refrescar listado
        setNombre("");
        setFecha("");
        setLugar("");
      })
      .catch((err) => console.error("Error al crear evento:", err));
  };

  return (
    <div className="container py-5">
      {/* Título principal con estilo */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">
          📅 Listado de Eventos
        </h1>
        <p className="lead text-muted">Haz clic en cualquier evento para ver sus detalles</p>
      </div>

      {/* GRID DE EVENTOS */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
        {eventos.length > 0 ? (
          eventos.map((evento) => (
            <div className="col" key={evento.id}>
              <div
                className="card h-100 shadow-sm border-0 rounded-3 bg-gradient-custom text-white"
                onClick={() => navigate(`/eventos/${evento.id}`)}
                style={{ cursor: "pointer", transition: "transform 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{evento.nombre}</h5>
                  <p className="card-text opacity-90">
                    <i className="bi bi-calendar-event me-2"></i>
                    {new Date(evento.fecha).toLocaleDateString("es-ES")}
                  </p>
                  <p className="card-text opacity-90">
                    <i className="bi bi-geo-alt me-2"></i>
                    {evento.lugar}
                  </p>
                  <div className="mt-auto">
                    <span className="badge bg-light text-dark">
                      {evento.participantes?.length || 0} participantes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-info text-center" role="alert">
              <i className="bi bi-info-circle me-2"></i>
              No hay eventos creados aún. ¡Crea el primero!
            </div>
          </div>
        )}
      </div>

      {/* FORMULARIO PARA CREAR NUEVO EVENTO */}
      <div className="bg-light p-4 p-md-5 rounded-4 shadow">
        <h2 className="fw-bold text-center mb-4">
          <i className="bi bi-plus-circle me-2"></i>
          Crear Nuevo Evento
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label fw-semibold">
              Nombre del evento
            </label>
            <input
              type="text"
              id="nombre"
              className="form-control form-control-lg rounded-pill"
              placeholder="Ej: Fiesta de Cumpleaños"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fecha" className="form-label fw-semibold">
              Fecha
            </label>
            <input
              type="date"
              id="fecha"
              className="form-control form-control-lg rounded-pill"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lugar" className="form-label fw-semibold">
              Lugar
            </label>
            <input
              type="text"
              id="lugar"
              className="form-control form-control-lg rounded-pill"
              placeholder="Ej: Parque Central"
              value={lugar}
              onChange={(e) => setLugar(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-success btn-lg rounded-pill fw-bold py-3"
            >
              <i className="bi bi-save me-2"></i>
              Guardar Evento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ListadoEventos;