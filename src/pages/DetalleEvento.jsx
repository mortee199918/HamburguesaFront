import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './DetalleEvento.css';
import { getEventById } from "../services/event";
import {addAssistantToEvent} from "../services/userEvent";

const DetalleEvento = () => {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  getEventById(id).then(setEvento);
  }, [id]);

  if (!evento) {
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }


  return (
    <div className="container">

      {/* Título principal */}
      <h1 className="header-box">
        🎉 Detalle del Evento
      </h1>

      <div className="divider-yellow"></div>

      {/* Tarjeta del evento */}
      <div className="event-card">
        <h2 className="event-title">{evento.name}</h2>
        <p className="event-info">
          <i className="bi bi-calendar-event"></i>
          {new Date(evento.date).toLocaleDateString("es-ES")}
        </p>
        <p className="event-info">
          <i className="bi bi-geo-alt"></i>
          {evento.lugar}
        </p>
        <p className="event-info">
          <i className="bi bi-people"></i>
          <strong>{evento.assistsants?.length || 0} participantes</strong>
        </p>
      </div>

      <div className="divider-brown"></div>

      {/* Sección de participantes */}
      <div className="participants-section">
        <h3>👥 Participantes</h3>
        {evento.assistsants && evento.assistsants.length > 0 ? (
          evento.assistsants.map((assistsant, index) => (
            <div key={index} className="participant-item">
              {assistsant.user.username || `Participante ${index + 1}`}
            </div>
          ))
        ) : (
          <p className="no-participants">Aún no hay participantes registrados.</p>
        )}
      </div>

      {/* Botones de acción */}
      <div className="btn-group">
        <button className="btn-action" onClick={()=>{addAssistantToEvent(evento)
        }}>
          <i className="bi bi-person-plus me-1"></i> Unirse 
        </button>
        <button className="btn-action">
          <i className="bi bi-pencil me-1"></i> Editar Evento
        </button>
        <button className="btn-action" style={{ backgroundColor: '#DB3C09' }}>
          <i className="bi bi-trash me-1"></i> Eliminar Evento
        </button>
      </div>

      {/* Botón de regreso */}
      <div className="text-center">
        <button
          className="back-link"
          onClick={() => navigate('/listado')}
        >
          ← Volver al Listado
        </button>
      </div>

      <div className="divider-brown" style={{ marginTop: '3rem' }}></div>
    </div>
  );
};

export default DetalleEvento;