import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import liga from "@/assets/nuevofondo.jpg";
import { useAuthStore } from "@/store/authstore";

function Dashboard() {
  const { logout, user } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Estados para los menús desplegables
  const [deportistasMenuOpen, setDeportistasMenuOpen] = useState(false);
  const [usuariosMenuOpen, setUsuariosMenuOpen] = useState(false);
  
  const [EventosMenuOpen, setEventosMenuOpen] = useState(false);
  const [ClubesMenuOpen, setClubesMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Encabezado */}
      <header className="flex items-center justify-between bg-green-700 text-white px-4 py-3">
        <h1 className="text-lg font-bold">Sistema Integral De Gestion Administrativa Y Deportiva</h1>
        
        <div className="relative">
          <button
            className="flex items-center focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="flex flex-grow">
        {/* Menú lateral */}
        <aside className="w-64 bg-green-700 text-white flex flex-col">
          <div className="p-4 flex flex-col items-center">
            <div className="rounded-full overflow-hidden w-50 h-150">
              <img src={liga} alt="Perfil" className="w-full h-full object-contain" />
            </div>
            <h6 className="mt-4 text-lg font-bold">
              {user?.username || "Usuario"}
            </h6>
          </div>

          <nav className="flex-grow">
            <ul className="space-y-2 px-4">
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center p-2 rounded hover:bg-green-800 w-full text-left"
                >
                  <span className="ml-3">Inicio</span>
                </Link>
              </li>
              
              <li>
                <button
                  onClick={() => setUsuariosMenuOpen(!usuariosMenuOpen)}
                  className="flex items-center p-2 rounded hover:bg-green-800 w-full text-left"
                >
                  <span className="ml-3">Gestión Usuarios</span>
                </button>
                {usuariosMenuOpen && (
                  <ul className="pl-6 space-y-2">
                    <li>
                      <Link
                        to="/dashboard/listausuario"
                        className="block p-2 rounded hover:bg-green-800 w-full text-left"
                      >
                        Listar Usuarios
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <button
                  onClick={() => setDeportistasMenuOpen(!deportistasMenuOpen)}
                  className="flex items-center p-2 rounded hover:bg-green-800 w-full text-left"
                >
                  <span className="ml-3">Deportistas</span>
                </button>
                {deportistasMenuOpen && (
                  <ul className="pl-6 space-y-2">
                    <li>
                      <Link
                        to="/dashboard/regdeportista"
                        className="block p-2 rounded hover:bg-green-800"
                      >
                        Registrar Deportista
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/listadeportista"
                        className="block p-2 rounded hover:bg-green-800"
                      >
                        Lista de Deportistas
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/contactofamiliar"
                        className="block p-2 rounded hover:bg-green-800"
                      >
                        Datos de Contacto
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/soporte"
                        className="block p-2 rounded hover:bg-green-800"
                      >
                        Soportes
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <button 
                  onClick={() => setClubesMenuOpen(!ClubesMenuOpen)}
                  className="flex items-center p-2 rounded hover:bg-green-800 w-full text-left">
                  <span className="ml-3">Clubes</span>
                </button>
                {ClubesMenuOpen && (
                  <ul className="pl-6 space-y-2">
                    <li>
                      <Link 
                        to="/dashboard/club" 
                        className="block p-2 rounded hover:bg-green-800">
                        Club
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/dashboard/listaclub" 
                        className="block p-2 rounded hover:bg-green-800">
                        Listar Clubes
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/dashboard/transferencia" 
                        className="block p-2 rounded hover:bg-green-800">
                        Transferir Jugador
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <button 
                  onClick={() => setEventosMenuOpen(!EventosMenuOpen)}
                  className="flex items-center p-2 rounded hover:bg-green-800 w-full text-left">
                  <span className="ml-3">Eventos</span>
                </button>
                {EventosMenuOpen && (
                  <ul className="pl-6 space-y-2">
                    <li>
                      <Link
                        to="/dashboard/regevento"
                        className="block p-2 rounded hover:bg-green-800">
                        Registrar Evento
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/listaevento"
                        className="block p-2 rounded hover:bg-green-800">
                        Listar Eventos
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          <footer className="text-center py-4 bg-green-700 text-sm">
            &copy; {new Date().getFullYear()} - Liga de voleibol
          </footer>
        </aside>

        {/* Contenido principal */}
        <main className="flex-grow p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;