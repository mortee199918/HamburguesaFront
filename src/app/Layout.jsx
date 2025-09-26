import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="bg-blue-700 text-white p-4 flex justify-between items-center shadow">
        <div className="container-fluid row">
        <h1
          className="text-xl font-bold cursor-pointer col-7"
        
        >
          🍽️ Noche Hamburguesa 🍔
        </h1>
        <button className="col-2  btn btn-success m-2 " onClick={() => navigate("/perfil")}>Perfil</button>
        <button className="col-2  btn btn-success m-2"> LOG OUT </button>
        </div>

        <button
          onClick={() => navigate("/listado")}
          className="bg-gray-200 text-white px-3 py-1 rounded hover:bg-gray-300  btn btn-success"
        >
          ⬅ Volver al listado
        </button>
      
      </header>

      {/* CONTENIDO */}
      {/*<main className="flex-1 p-6">{children}</main>*/}

      <Outlet></Outlet>

      {/* FOOTER (opcional) */}
      <footer className="bg-gray-100 text-center p-3 text-sm text-gray-500">
        © {new Date().getFullYear()} - App de Eventos
      </footer>
    </div>
  );
}

export default Layout;
