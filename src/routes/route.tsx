import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "@/home/principal/login/login";
import Registrar from "@/home/principal/registrar/registrar";
import Inicio from "@/home/principal/banner_inicio/inicio";
import Dashboard from "@/home/principal/dasboard/dasboard";
import Layout from "@/layout";
import Nosotros from "@/home/principal/nosotros/nosotros";
import RegDeportista from "@/home/principal/dasboard/deportista/regdeportista";
import ListaDeportista from "@/home/principal/dasboard/deportista/listadeportista";
import ContactoFamiliarDep from "@/home/principal/dasboard/deportista/contactofamiliardep";
import Soporte from "@/home/principal/dasboard/deportista/soporte";
import Club from "@/home/principal/dasboard/club/club";
import { useAuthStore } from "@/store/authstore";
import { RoleType } from "@/enums/roles/role";
import TransferenciaJugador from '../home/principal/dasboard/club/transferencia';
import RegistrarEvento from "@/home/principal/dasboard/eventos/registrarevento";
import ListarEventos from "@/home/principal/dasboard/eventos/listarevento";
import ListaClub from "@/home/principal/dasboard/club/listaclub";
import DashboardHome from "@/home/principal/dasboard/dashboard-home";
import ListaUsuarios from "@/home/principal/dasboard/gestion_usuarios/listausuario";
import { useEffect } from "react";

export const RoutesIndex = () => {
  const { isAuthenticated, user, loading, initializeAuth } = useAuthStore();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<Layout />}>
          <Route path="/" element={!isAuthenticated ? <Inicio /> : <Navigate to="/dashboard" replace />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route 
            path="/login" 
            element={ <Login /> } 
          />
          <Route 
            path="/registrar" 
            element={<Registrar /> } 
          />
        </Route>

        {/* Rutas protegidas */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated && user?.role?.name === RoleType.ADMIN ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="regdeportista" element={<RegDeportista />} />
          <Route path="listadeportista" element={<ListaDeportista />} />
          <Route path="contactofamiliar" element={<ContactoFamiliarDep />} />
          <Route path="soporte" element={<Soporte />} />
          <Route path="club" element={<Club />} />
          <Route path="transferencia" element={<TransferenciaJugador />} />
          <Route path="listaclub" element={<ListaClub />} />
          <Route path="regevento" element={<RegistrarEvento />} />
          <Route path="listaevento" element={<ListarEventos />} />
          <Route path="listausuario" element={<ListaUsuarios />} />
        </Route>

        {/* Ruta de fallback */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/"} />} />
      </Routes>
    </Router>
  );
};