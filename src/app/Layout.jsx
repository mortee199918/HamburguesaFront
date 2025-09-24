import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="bg-blue-700 text-white p-4 flex justify-between items-center shadow">
        <div className="container-fluid row">
        <h1
          className="text-xl font-bold cursor-pointer col-8"
          onClick={() => navigate("/")}
        >
          🍽️ Mis Eventos
        </h1>
        <button className="col-2 offset-2 btn btn-success" onClick={() => navigate("/perfil")}>Perfil</button>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-gray-200 text-black px-3 py-1 rounded hover:bg-gray-300"
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
