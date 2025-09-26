import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './DetalleEvento.css';
import { getEventById, updateEvent, deleteEvent } from "../services/event";
import { addAssistantToEvent } from "../services/userEvent";
import UserEvents from "./UserEvents";

const DetalleEvento = () => {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);
  const [editando, setEditando] = useState(false); 
  const [formData, setFormData] = useState({ name: '', location: '', date: '' });
  const navigate = useNavigate();

  useEffect(() => {
    getEventById(id)
      .then(data => {
        setEvento(data);
      
        if (data) {
          setFormData({
            name: data.name || '',
            location: data.location || '',
            date: data.date ? new Date(data.date).toISOString().split('T')[0] : ''
          });
        }
      })
      .catch(err => console.error("Error al cargar evento:", err));
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


  const handleSave = async () => {
    try {
      const eventoActualizado = await updateEvent({
        ...evento,
        ...formData
      });
      setEvento(eventoActualizado);
      setEditando(false);
      alert("Evento actualizado correctamente");
    } catch (err) {
      console.error("Error al actualizar evento:", err);
      alert("No se pudo actualizar el evento");
    }
  };

  
  const handleCancel = () => {
    setEditando(false);
    setFormData({
      name: evento.name || '',
      location: evento.location || '',
      date: evento.date ? new Date(evento.date).toISOString().split('T')[0] : ''
    });
  };

  const handleDelete = async () => {
    if (window.confirm("¿Seguro que deseas eliminar este evento?")) {
      try {
        await deleteEvent(evento.id);
        alert("Evento eliminado correctamente");
        navigate('/listado');
      } catch (err) {
        console.error("Error al eliminar evento:", err);
        alert("No se pudo eliminar el evento");
      }
    }
  };

  
  
  return (
    <div className="container">
      <h1 className="header-box">
        🎉 Detalle del Evento
      </h1>

      <div className="divider-yellow"></div>

    
      <div className="event-card" style={{ height:"250px"}}>
        {editando ? (
          <div className="edit-form">
            <div className="row">
              <label className="form-label col-2">Nombre</label>
              <input
                type="text"
                className="form-control col-6"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="row">
              <label className="form-label col-2">Lugar</label>
              <input
                type="text"
                className="form-control col-6"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
            <div className="row">
              <label className="form-label col-2">Fecha</label>
              <input
                type="date"
                className="form-control col-6"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            <div className="d-flex gap-2">
              <button className="btn-action" onClick={handleSave}>
                <i className="bi bi-save me-1"></i> Guardar
              </button>
              <button className="btn-action" style={{ backgroundColor: '#6c757d' }} onClick={handleCancel}>
                <i className="bi bi-x me-1"></i> Cancelar
              </button>
            </div>
          </div>
        ) : (
          <>
            <h2 className="event-title">{evento.name}</h2>
            <p className="event-info">
              <i className="bi bi-calendar-event"></i>
              {new Date(evento.date).toLocaleDateString("es-ES")}
            </p>
            <p className="event-info">
              <i className="bi bi-geo-alt"></i>
              {evento.location}
            </p>
            <p className="event-info">
              <i className="bi bi-people"></i>
              <strong>{evento.assistants?.length || 0} participantes</strong>
            </p>
          </>
        )}
      </div>

      <div className="divider-brown"></div>
      <div className="participants-section">
        <h3>👥 Participantes</h3>
        {evento.assistants ? (
          evento.assistants.map((assistant) => (
           <UserEvents assistantIn={assistant}/>
             
          ))
        ) : (
          <p className="no-participants">Aún no hay participantes registrados.</p>
        )}
      </div>
      <div className="btn-group">
        {!editando && (
          <>
            <button
              className="btn-action"
             onClick={() => addAssistantToEvent(evento)}
            >
              <i className="bi bi-person-plus me-1"></i> Unirse
            </button>
            <button
              className="btn-action"
              onClick={() => setEditando(true)}
            >
              <i className="bi bi-pencil me-1"></i> Editar Evento
            </button>
            <button
              className="btn-action"
              style={{ backgroundColor: '#DB3C09' }}
              onClick={handleDelete}
            >
              <i className="bi bi-trash me-1"></i> Eliminar Evento
            </button>
          </>
        )}
      </div>
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