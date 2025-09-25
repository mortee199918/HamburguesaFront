import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ListadoEventos.css";
import { createEvent, getEvents } from "../services/event";

const ListadoEventos = () => {
  const [eventos, setEventos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [lugar, setLugar] = useState("");
  

  useEffect(() => {
    getEvents().then(setEventos);    
  }, []);

  // Crear nuevo evento
  const handleSubmit = () => {
    createEvent({name: nombre, location: lugar, date: fecha })
   
  };

  return (
    <div className="container"> {/* 👈 NO "styles.container" */}

      <div className="text-center">
        <h1 className="title-box">📅 Listado de Eventos</h1> {/* 👈 NO "styles.title-box" */}
        <p className="subtitle">Haz clic en cualquier evento para ver sus detalles</p>
      </div>

      <div className="divider-yellow"></div>

      {/* GRID DE EVENTOS */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5 px-3">
        {eventos.length > 0 ? (
          eventos?.map((evento) => (
            <div className="col d-flex" key={evento.id}>
              <div
                className="eventCard" 
              >
                <h2><Link to={"/eventos/"+evento.id}/>{evento.name}</h2>
                <h3>{new Date(evento.date).toLocaleDateString()}</h3>
                <h3>{evento.location}</h3>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="noEventsAlert" role="alert"> {/* 👈 NO "styles.noEventsAlert" */}
              <i className="bi bi-info-circle me-2"></i>
              No hay eventos creados aún. ¡Crea el primero!
            </div>
          </div>
        )}
      </div>

      <div className="divider-brown"></div>

      <div className="formBox"> {/* 👈 NO "styles.formBox" */}
        <h2 className="text-center fw-bold">
          <i className="bi bi-plus-circle me-2"></i>
          Crear Nuevo Evento
        </h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="formGroupGreen">
            <input
              type="text"
              className="form-control form-control-lg rounded-pill"
              placeholder="Nombre del evento"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="formGroupYellow">
            <input
              type="date"
              className="form-control form-control-lg rounded-pill"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </div>

          <div className="formGroupGreen">
            <input
              type="text"
              className="form-control form-control-lg rounded-pill"
              placeholder="Lugar del evento"
              value={lugar}
              onChange={(e) => setLugar(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="submit-btn" // 👈 NO "styles.submitBtn"
            onClick={()=>handleSubmit()}  
          >
            <i className="bi bi-save me-2"></i>
            Guardar Evento
          </button>
        </form>
      </div>

      <div className="divider-brown"></div>
    </div>
  );
};

export default ListadoEventos;